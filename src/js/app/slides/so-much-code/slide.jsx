/** @jsx React.DOM */
define([
	"react"
], function(React) {
	var Slide = React.createClass({
		render: function() {
			return <div>
				<img src="/images/so-much-code.jpg" className="slide-image slide-image-fill" />
			</div>;
		}
	});

	return Slide;
});