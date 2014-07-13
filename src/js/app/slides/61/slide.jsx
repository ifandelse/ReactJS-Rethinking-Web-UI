/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./q-and-a"
], function(React, TitledSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="q-and-a" title="Q &amp; A">
                <img className="slide-image" src="js/app/slides/61/PussInBoots1.gif" />
            </TitledSlide>;
       }
    });
    return Slide;
});