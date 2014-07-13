/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="kitteh" title="How is Kitteh Formed?">
            	<img className="slide-image slide-image-fill" src="js/app/slides/31/Kitteh.png" />
            </TitledSlide>;
       }
    });
    return Slide;
});