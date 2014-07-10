/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./rendering"
], function(React, TitledSlide, md) {
    return React.createClass({
        render: function() {
            return <TitledSlide classes="rendering" title="Rendering Components">
                <img src="js/app/slides/23/rendering.png" />
            </TitledSlide>;
       }
    });
});