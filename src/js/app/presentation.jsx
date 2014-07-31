/** @jsx React.DOM */

define([
	"react",
	"machina",
	"mousetrap",
	"postal",
	"json!./slide-order.json"
], function(React, machina, Mousetrap, postal, presConfig) {

	var slide = postal.channel("slide");
	var router = postal.channel("router");
	var navigation = postal.channel("navigation");

	function changeSlidePosition(direction) {
		var self = this;
		var newPos;
		this.direction = direction;
		newPos = self.nextPos;
		self.prevPos = self.currentPos;
		if(newPos === undefined) {
			self.currentPos = (direction === "advancing") ? self.currentPos + 1 : self.currentPos - 1;
		} else {
			self.currentPos = newPos;
		}
		self.nextPos = undefined;
		if((self.currentPos < 0) || (self.currentPos >= presConfig.slides.length)) {
			self.currentPos = self.prevPos;
		}

		return slide.request({
			topic: "position.change",
			data: {
				slideId: self.currentPos 
			}
		});
	}

	return machina.Fsm.extend({
		initialize: function() {
			var self = this;
			self.currentPos = 0;
			navigation.subscribe("#", function(data, env){
				if(data && data.cmd && self[data.cmd]) {
					self[data.cmd]();
				} else if (env.topic === "direction.request") {
					env.reply({ direction: self.direction });
				}
			});
			router.subscribe("slide.change", function(data){
				self.handle("selectSlide", data.slideId);
			});
		},

		start: function() {
			this.handle("start");
		},

		next: function() {
			this.handle("next");
		},

		yield: function() {
			this.handle("yield");
		},

		"yield.next": function() {
			this.handle("yield.next");
		},

		"yield.previous": function() {
			this.handle("yield.previous");
		},

		previous: function() {
			this.handle("previous");
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
				next: "advancing",
				previous: "rewinding",
				yield: "yielding",
				selectSlide: function(id) {
					this.prevPos = this.currentPos;
					this.nextPos = id;
					this.transition(this.currentPos > this.nextPos ? "rewinding" : "advancing");
				},
				oopsGoBack: function(id) {
					this.handle("selectSlide", id);
				}
			},
			yielding: {
				"yield.next" : "advancing",
				"yield.previous" : "rewinding",
				selectSlide: function() {
					this.deferAndTransition("viewing");
				}
			},
			advancing: {
				_onEnter: function() {
					changeSlidePosition.call(this, "advancing")
						.then(function(data){
							this.handle("advanced");
						}.bind(this));
				},
				advanced: "viewing"
			},
			rewinding: {
				_onEnter: function() {
					changeSlidePosition.call(this, "rewinding")
						.then(function(data){
							this.handle("rewound");
						}.bind(this));
				},
				rewound: "viewing"
			}
		},

		renderCurrentSlide: function() {
			var self = this;
			var slide = presConfig.slides[self.currentPos];
			require(["jsx!js/app/slides/" + slide + "/slide"], function(Slide){
				React.renderComponent(
					Slide({ imageDir: "js/app/slides/" + slide + "/" }),
					document.getElementById("presentation")
				);
			}, function (err) {
				self.handle("oopsGoBack", self.prevPos);
			});
		}
	});

});