/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./flux"
], function(React, TitledSlide, md) {
    return React.createClass({
        render: function() {
            return <TitledSlide classes="flux" title="Let's Talk 'Flux'">
            	<img src="js/app/slides/38/flux.jpg" />
            </TitledSlide>;
       }
    });
});