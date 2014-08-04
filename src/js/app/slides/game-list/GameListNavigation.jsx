/** @jsx React.DOM */
define([
	"react",
	"postal.react"
], function(React, postalReact) {
	var GameListNavigation = React.createClass({

		mixins: [postalReact],

		navigate: function(e) {
			e.preventDefault();
			var navNext = this.refs.navNext.getDOMNode();
			var dir = (e.currentTarget === navNext) ? "next" : "prev";
			this.publish("navigate", { direction: dir });
		},

		render: function() {
			return <div>
				<a className="gamex-nav" onClick={this.navigate} ref="navPrev">
					<i className="fa fa-chevron-left fa-3"></i>
				</a>
				<a className="gamex-nav" onClick={this.navigate} ref="navNext">
					<i className="fa fa-chevron-right fa-3"></i>
				</a>
			</div>;
		}
	});

	return GameListNavigation;
});


