/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="binding" title="Demo Structure">
            	<img className="slide-image slide-image-white" src={this.props.imageDir + "8BitQuiz.png"} />
            </TitledSlide>;
       }
    });
    return Slide;
});