/** @jsx React.DOM */
define([
	"react"
], function(React) {
	var classSet = React.addons.classSet;

	var GameExample = React.createClass({
		render: function() {
			var transitionStatus = this.props.transitionStatus
			var classes = classSet({
				gamex    : true,
				animated : true,
				fadeIn   : transitionStatus === "activating",
				fadeOut  : transitionStatus === "inactivating"
			});
			return <div className={classes}>
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

