/** @jsx React.DOM */
define([
	"react"
], function(React) {
	var GameBlurb = React.createClass({

		getInitialState: function() {
			return {
				firstRender: true
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
				<p>{this.props.description}</p>
			</div>;
		}
	});

	return GameBlurb;
});