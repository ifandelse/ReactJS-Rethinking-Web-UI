/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="dev-tools" title="Enter React">
                <h1 className="slide-headline-alt">And without having to go back to this?</h1>
            	<img className="slide-image" src={this.props.imageDir + "yahoo.png"} />
            </TitledSlide>;
       }
    });
    return Slide;
});