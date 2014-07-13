/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="place-kitten" title="React Component – Plain JS">
                <img className="slide-image slide-image-fill" src="js/app/slides/21/placeKitten1.png" />
            </TitledSlide>;
       }
    });
    return Slide;
});