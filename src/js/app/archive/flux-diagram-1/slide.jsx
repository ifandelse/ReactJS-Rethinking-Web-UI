/** @jsx React.DOM */
define([
	"react",
	"jsx!titledslide"
], function(React, TitledSlide) {
	var Slide = React.createClass({
		render: function() {
			return <TitledSlide classes="flux-arch" title="">
				<img className="slide-image" src={this.props.imageDir + "FluxArch1.png"} />
			</TitledSlide>;
		}
	});
	return Slide;
});