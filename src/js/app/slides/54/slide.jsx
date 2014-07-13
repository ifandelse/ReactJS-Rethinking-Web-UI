/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="flux-scale" title="">
            	<img className="slide-image" src="js/app/slides/54/fluxatscale.png" />
				<div><aside>http://fluxxor.com/images/flux-complex.png</aside></div>
            </TitledSlide>;
       }
    });
    return Slide;
});