/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide =  React.createClass({
        render: function() {
            return <TitledSlide classes="data-mixin" title="Messaging Mixin">
                <div className="scroller">
            	   <img className="slide-image slide-image-fill slide-image-scrollable" src={this.props.imageDir + "dataMixin.png"} />
                </div>
            </TitledSlide>;
       }
    });
    return Slide;
});