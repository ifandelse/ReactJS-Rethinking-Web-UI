/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="events2" title="ReactJS &amp; Events">
                <img className="slide-image slide-image-fill" src={this.props.imageDir + "events2.png"} />
            </TitledSlide>;
       }
    });
    return Slide;
});