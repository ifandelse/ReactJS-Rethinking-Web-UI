define([
	"backbone",
	"postal",
	"lodash"
], function(Backbone, postal, _) {

	var slide = postal.channel("slide");

	return Backbone.Router.extend({

		initialize: function() {
			_.bindAll(this, "handleRoot", "handleSlide");
			// The presentation FSM requests slide position changes
			// when forward/back keys are used, so we need to handle that
			slide.subscribe("position.change", function(data, env){
				this.navigate("#slide/" + data.slideId);
				env.reply({});
			}).withContext(this);
		},

		routes: {
			"" : "handleRoot",
			"slide/:id" : "handleSlide"
		},

		handleRoot: function() {
			this.handleSlide(0);
		},	

		handleSlide: function(id) {
			id = parseInt(id, 10) || 0;
			postal.publish({
				channel: "router",
				topic: "slide.change",
				data: {
					slideId: id
				}
			});
		}
	});
});