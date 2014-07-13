/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="breakdown" title="Deconstructing KittehGrid">
                    <img className="white-bg slide-image" src="js/app/slides/30/KittehGrid.png" />
            </TitledSlide>;
       }
    });
    return Slide;
});