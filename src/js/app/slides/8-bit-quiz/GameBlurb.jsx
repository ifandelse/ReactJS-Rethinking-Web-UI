/** @jsx React.DOM */
define([
	"react",
	"transitionManager"
], function(React, TransitionManager) {

	var GameBlurb = React.createClass({

		getInitialState: function() {
			return {
				animationClass: "",
				trivia: "",
			}
		},

		componentWillMount: function() {
			this.transitionManager = new TransitionManager({
				values: this.props.trivia
			});
			this.transitionManager.on("animation", function(data){
				this.setState({
					animationClass: data.animation,
					trivia: data.nextValue || this.state.trivia
				});
			}.bind(this));
			if(this.props.active) {
				this.transitionManager.start();
			}
		},

		componentWillUnmount: function() {
			this.transitionManager.stop();
		},

		componentWillReceiveProps: function(nextProps) {
			if(!nextProps.active) {
				this.transitionManager.stop();
			} else {
				this.transitionManager.reset();
			}
		},

		render: function() {
			var blurbClasses = [
				"carousel-caption",
				"fadeIn",
				"animated",
				this.props.className || ""
			];
			return <div className={blurbClasses.join(" ")}>
				<h3>{this.props.name}</h3>
				<p className={this.state.animationClass + " animated"}>{this.state.trivia}</p>
			</div>;
		}
	});

	return GameBlurb;
});