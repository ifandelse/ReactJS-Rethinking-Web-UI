/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./breakdown"
], function(React, TitledSlide) {
    return React.createClass({
        render: function() {
            return <TitledSlide classes="breakdown" title="Deconstructing KittehGrid">
                    <img src="js/app/slides/30/KittehGrid.png" />
            </TitledSlide>;
       }
    });
});