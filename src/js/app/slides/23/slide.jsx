/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="rendering" title="Rendering Components">
                <img className="slide-image slide-image-fill" src="js/app/slides/23/rendering.png" />
            </TitledSlide>;
       }
    });
    return Slide;
});