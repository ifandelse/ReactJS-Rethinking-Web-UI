/** @jsx React.DOM */
define([
	"react"
], function(React) {
	var GameDataImg = React.createClass({
		render: function() {
			return <div>
				<h2>For Each Game, We Have Data:</h2>
				<img src="/images/gamedata.png" className="slide-image slide-image-constrained" />
			</div>;
		}
	});

	return GameDataImg
});