/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./lifecycle2.css"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="lifecycle2" title="Component Lifecycle Methods">
                <h2><code>componentwillReceiveProps</code></h2>
                <ul>
                    <li>Called when a component is receiving new props.</li>
                    <li>Old props can still be accessed via <code>this.props</code> and new props are passed into the method.</li>
                </ul>
                <img width="700" className="top-breathing-room slide-image" src={this.props.imageDir + "willprops.png"} />
            </TitledSlide>;
       }
    });
    return Slide;
});