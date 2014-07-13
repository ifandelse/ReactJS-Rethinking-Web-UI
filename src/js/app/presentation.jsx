/** @jsx React.DOM */

define([
	"react",
	"machina",
	"mousetrap",
	"postal"
], function(React, machina, Mousetrap, postal) {

	var slide = postal.channel("slide");
	var router = postal.channel("router");

	return machina.Fsm.extend({
		initialize: function() {
			var self = this;
			self.currentPos = 0;
			Mousetrap.bind(['left', 'backspace'], function() {
			    self.previous();
			});
			Mousetrap.bind(['right', 'space', 'enter'], function() {
			    self.next();
			});
			router.subscribe("slide.change", function(data){
				self.handle("selectSlide", data.slideId);
			});
		},

		start: function() {
			this.handle("start");
		},

		next: function() {
			this.handle("nextSlide");
		},

		previous: function() {
			this.handle("previousSlide");
		},

		states: {
			uninitialized: {
				start: "viewing",
				"*" : function() {
					this.deferUntilTransition();
				}
			},
			viewing: {
				_onEnter: function() {
					if(!this.eventQueue.length) {
						this.renderCurrentSlide();
					}
				},
				nextSlide: "advancing",
				previousSlide: "rewinding",
				selectSlide: function(id) {
					this.prevPos = this.currentPos;
					this.nextPos = id;
					this.transition(this.currentPos > this.nextPos ? "rewinding" : "advancing");
				},
				oopsGoBack: function(id) {
					this.handle("selectSlide", id);
				}
			},
			advancing: {
				_onEnter: function() {
					var self = this;
					var newPos;
					newPos = self.nextPos;
					self.prevPos = self.currentPos;
					if(newPos === undefined) {
						self.currentPos = self.currentPos + 1;
					} else {
						self.currentPos = newPos;
					}
					self.nextPos = undefined;
					slide.request({
						topic: "position.change",
						data: {
							slideId: self.currentPos 
						}
					}).then(function(data){
						self.handle("advanced");
					});
				},
				advanced: "viewing"
			},
			rewinding: {
				_onEnter: function() {
					var self = this;
					var newPos;
					newPos = self.nextPos;
					self.prevPos = self.currentPos;
					if(newPos === undefined) {
						self.currentPos = self.currentPos - 1;
					} else {
						self.currentPos = newPos;
					}
					self.nextPos = undefined;
					slide.request({
						topic: "position.change",
						data: {
							slideId: self.currentPos 
						}
					}).then(function(data){
						self.handle("rewound");
					});
				},
				rewound: "viewing"
			}
		},

		renderCurrentSlide: function() {
			var self = this;
			require(["jsx!js/app/slides/" + self.currentPos + "/slide"], function(Slide){
				React.renderComponent(
					Slide(),
					document.getElementById("presentation")
				);
			}, function (err) {
				self.handle("oopsGoBack", self.prevPos);
			});
		}
	});

});