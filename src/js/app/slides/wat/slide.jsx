/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="storytime" title="">
                    <img className="slide-image slide-image-fill" src={this.props.imageDir + "Wat.jpg"} />
            </TitledSlide>;
       }
    });
    return Slide;
});