/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "stepFsm",
    "css!./appeal1.css"
], function(React, TitledSlide, StepFsm) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="">
                <img className="slide-image slide-image-constrained-lg" src={this.props.imageDir + "airquotes.png"} />  
            </TitledSlide>;
       }
    });
    return Slide;
});