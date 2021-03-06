/** @jsx React.DOM */
define([
	"react"
], function(React) {
	var GameExample = React.createClass({
		render: function() {
			var classes = [
				"gamex",
				"animated",
				this.props.isActive ? "fadeIn" : "gamex-inactive"
			];
			return <div className={classes.join(" ")}>
				<img className="slide-image gamex-image"
					 alt={this.props.name}
					 src={this.props.image} />
				<div>
					<h3 className="gamex-title">{this.props.name}</h3>
					<p className="gamex-desc">{this.props.description}</p>
				</div>
			</div>;
		}
	});
	return GameExample;
});

