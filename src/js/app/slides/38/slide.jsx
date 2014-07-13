/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide =  React.createClass({
        render: function() {
            return <TitledSlide classes="contact-form" title="ContactForm Component">
                <div className="scroller">
            	   <img className="slide-image slide-image-fill slide-image-scrollable" src="js/app/slides/38/ContactForm.png" />
                </div>
            </TitledSlide>;
       }
    });
    return Slide;
});