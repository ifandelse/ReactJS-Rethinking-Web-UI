/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./placeKitten"
], function(React, TitledSlide, md) {
    return React.createClass({
        render: function() {
            return <TitledSlide classes="place-kitten" title="React Component – Plain JS">
                <img src="js/app/slides/21/placeKitten1.png" />
            </TitledSlide>;
       }
    });
});