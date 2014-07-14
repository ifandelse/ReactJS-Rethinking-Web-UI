/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="tweetping" title="But *Not* for this">
                    <img className="slide-image slide-image-fill" src={this.props.imageDir + "tweetping.gif"} />
            </TitledSlide>;
       }
    });

    return Slide;
});