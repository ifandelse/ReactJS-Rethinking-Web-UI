/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="component-api4" title="Component Lifecycle Methods">
                <h2><code>componentWillUnmount</code></h2>
                <ul>
                    <li>Called before component is unmounted from the DOM.</li>
                    <li>Important to perform cleanup actions here.</li>
                </ul>
                <img className="top-breathing-room slide-image" src="js/app/slides/49/willunmount.png" />
            </TitledSlide>;
       }
    });
    return Slide;
});