/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    return React.createClass({
        render: function() {
            return <TitledSlide classes="storytime" title="But *Not* for this">
                    <img src="images/tweetping.gif" />
            </TitledSlide>;
       }
    });
});