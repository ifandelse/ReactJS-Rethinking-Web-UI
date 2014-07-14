/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="on-change-viewer" title="OnChangeViewer Component">
                <div>
            	   <img className="slide-image slide-image-fill" src={this.props.imageDir + "OnChangeViewer.png"} />
                </div>
            </TitledSlide>;
       }
    });
    return Slide;
});