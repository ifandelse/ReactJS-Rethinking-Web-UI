define([
	"machina",
	"postal"
], function(machina, postal){

    var nav = postal.channel("navigation");

	return machina.Fsm.extend({

        initialize: function() {
            var self = this;
            nav.publish("yield", { cmd: "yield" });
            self.sub = nav.subscribe("#", function(data) {
                if(data && data.cmd && self[data.cmd]) {
                    self[data.cmd]();
                }
            });
            nav.request({ topic: "direction.request" }).then(function(data) {
                if(data && data.direction === "rewinding") {
                    self.stepIndex = self.steps.length -1;
                } else {
                    self.stepIndex = 0;
                }
            });
        },

        dispose: function() {
            this.sub.unsubscribe();
        },

        stepIndex: 0,

        steps: [],

        states: {
            uninitialized: {
                start: "viewing"
            },
            viewing: {
                _onEnter: function() {
                    if(this.steps.length) {
                        this.steps[this.stepIndex]();
                    }
                },
                next: "advancing",
                previous: "rewinding"
            },
            advancing: {
                _onEnter: function() {
                    if(this.stepIndex < this.steps.length-1) {
                        this.stepIndex += 1;
                        this.transition("viewing");
                    } else {
                        nav.publish("yield.next", { cmd: "yield.next" });
                    }
                }
            },
            rewinding: {
                _onEnter: function() {
                    if(this.stepIndex > 0) {
                        this.stepIndex -= 1;
                        this.transition("viewing");
                    } else {
                        nav.publish("yield.previous", { cmd: "yield.previous" });
                    }
                }
            }
        },
        start: function() {
            this.handle("start");
        },
        next: function() {
            this.handle("next");            
        },
        previous: function() {
            this.handle("previous");
        }
    });

});