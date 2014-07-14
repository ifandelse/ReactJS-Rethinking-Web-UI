/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="dev-tools" title="ReactJS Chrome Extension">
            	<img className="slide-image" src={this.props.imageDir + "ReactDevTools.png"} />
            </TitledSlide>;
       }
    });
    return Slide;
});