/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="flux" title="Let's Talk 'Flux'">
            	<img className="slide-image slide-image-fill" src="js/app/slides/51/flux.jpg" />
            </TitledSlide>;
       }
    });
    return Slide;
});