/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="on-change-viewer" title="OnChangeViewer Component">
                <div>
            	   <img className="slide-image slide-image-fill" src="js/app/slides/40/OnChangeViewer.png" />
                </div>
            </TitledSlide>;
       }
    });
    return Slide;
});