/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide =  React.createClass({
        render: function() {
            return <TitledSlide classes="smart-form" title="SmartForm Component">
                <div className="scroller">
            	   <img className="slide-image slide-image-fill slide-image-scrollable" src={this.props.imageDir + "SmartForm.png"} />
                </div>
            </TitledSlide>;
       }
    });
    return Slide;
});