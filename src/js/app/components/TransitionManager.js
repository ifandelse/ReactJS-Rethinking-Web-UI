define([
	"machina"
], function(machina) {
	return machina.Fsm.extend({

		initialState: "stopped",

		duration: 500,

		values: [],

		transitions: [
			{ _in: "flipInX",     _out: "bounceOut" },
			{ _in: "fadeInUp",    _out: "lightSpeedOut" },
			{ _in: "flipInY",     _out: "fadeOutUp" },
			{ _in: "zoomInLeft",  _out: "zoomOutRight" },
			{ _in: "zoomInRight", _out: "zoomOutLeft" },
			{ _in: "bounceIn",    _out: "flipOutY" },
			{ _in: "fadeIn",      _out: "flipOutX" },
		],

		index: {
			step: 0,
			transition: 0
		},

		start: function() {
			this.handle("start");
		},

		stop: function() {
			this.handle("stop");
		},

		reset: function() {
			this.handle("reset");
		},

		states: {
			ready: {
				_onEnter: function() {
					this.emit("animation", {
						animation: this.transitions[this.index.transition]._in,
						nextValue: this.values[this.index.step]
					});
					this.timer = setTimeout(function(){
						this.handle("next");
					}.bind(this), this.duration);
				},
				reset: function() {
					this.index.step = 0;
					this.index.transition = 0;
				},
				stop: "stopped",
				next: function(){
					this.timer = setTimeout(function(){
						this.transition("advancing");
					}.bind(this), this.interval || 4000);
				}
			},
			advancing: {
				_onEnter: function() {
					this.emit("animation", {
						animation: this.transitions[this.index.transition]._out
					});
					if(this.index.step < this.values.length -1) {
						this.index.step = this.index.step + 1;
					} else {
						this.index.step = 0;
					}
					if(this.index.transition < this.transitions.length -1) {
						this.index.transition = this.index.transition + 1;
					} else {
						this.index.transition = 0;
					}
					this.timer = setTimeout(function(){
						this.handle("transitioned.out");
					}.bind(this), this.duration);
				},
				stop: "stopped",
				"transitioned.out" : "ready"
			},
			stopped: {
				_onEnter: function() {
					clearTimeout(this.timer);
				},
				start: "ready",
				reset: function() {
					this.index.step = 0;
					this.index.transition = 0;
					this.transition("ready");
				}
			}
		}
	});
});