/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide= React.createClass({
        render: function() {
            return <TitledSlide classes="wayback" title="Were precise enough for">
                    <img className="slide-image" src={this.props.imageDir + "YahooWayback.png"} />
            </TitledSlide>;
       }
    });
    return Slide;
});