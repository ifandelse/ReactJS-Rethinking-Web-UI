/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="storytime" title="">
                    <img className="slide-image slide-image-fill" src="js/app/slides/18/Wat.jpg" />
            </TitledSlide>;
       }
    });
    return Slide;
});