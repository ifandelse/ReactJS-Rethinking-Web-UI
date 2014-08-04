/** @jsx React.DOM */
define([
	"react",
	"jsx!titledslide"
], function(React, TitledSlide) {
	var Slide = React.createClass({
		render: function() {
			return <TitledSlide classes="flux-arch" title="">
				<h2 className="slide-headline top-breathing-room">React + uni-directional<br/>data flow</h2>
				<img className="slide-image" src={this.props.imageDir + "FluxArch1.png"} />
			</TitledSlide>;
		}
	});
	return Slide;
});