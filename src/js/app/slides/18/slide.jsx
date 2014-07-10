/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    return React.createClass({
        render: function() {
            return <TitledSlide classes="storytime" title="">
                    <img src="js/app/slides/18/Wat.jpg" />
            </TitledSlide>;
       }
    });
});