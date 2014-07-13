/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide title="Component Helpers">
                <div>
                    <em className="slide-headline-alt">(to name a few, for example)</em>
                </div>
                <ul>
                    <li><code>getDOMNode</code></li>
                    <li><code>setState</code></li>
                    <li><code>isMounted</code></li>
                    <li><code>getInitialState</code></li>
                    <li><code>getDefaultProps</code></li>
                    <li>and more...</li>
                </ul>
            </TitledSlide>;
       }
    });
    return Slide;
});