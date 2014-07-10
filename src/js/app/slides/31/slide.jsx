/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./kitteh"
], function(React, TitledSlide) {
    return React.createClass({
        render: function() {
            return <TitledSlide classes="kitteh" title="How is Kitteh Formed?">
            	<img src="js/app/slides/31/Kitteh.png" />
            </TitledSlide>;
       }
    });
});