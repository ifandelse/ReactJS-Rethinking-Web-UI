/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="dev-tools" title="Enter React">
                <p className="slide-headline slide-headline-alt">What if we could have the<br/>simplicity of re-rendering everything without the expense?</p>
            </TitledSlide>;
       }
    });
    return Slide;
});