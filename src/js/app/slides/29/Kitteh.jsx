/** @jsx React.DOM */
define([
    "react",
], function(React) {

	function getUrl(w, h) {
		return "http://placekitten.com/" + w + "/" + h;
	}

    var Kitteh = React.createClass({
		render: function() {
			var url = getUrl(this.props.width, this.props.height);
			return <img src={ url }
						width={this.props.width}
						height={this.props.height}
						className={ this.props.className } />;   
		}
	});
	return Kitteh;
});