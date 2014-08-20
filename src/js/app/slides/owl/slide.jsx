/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="dev-tools" title="Tutorials Be Like">
        	   <img src={this.props.imageDir + "howToDrawAnOwl.jpg"} className="slide-image" />
            </TitledSlide>;
       }
    });
    return Slide;
});