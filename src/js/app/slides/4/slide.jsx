/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    return React.createClass({
        render: function() {
            return <TitledSlide classes="storytime" title="Were precise enough for">
                    <img src="images/YahooWayback.png" />
            </TitledSlide>;
       }
    });
});