/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide title="KittehRow">
                <div className="scroller">
            	   <img className="slide-image slide-image-fill slide-image-scrollable" src={this.props.imageDir + "KittehRow.png"} />
                </div>
            </TitledSlide>;
       }
    });
    return Slide;
});