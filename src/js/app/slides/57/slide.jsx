/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="jsx-tooling2" title="JSX Tooling">
                <h2 className="slide-headline-alt">Pre-compiling JSX to JS</h2>

                <div className="top-breathing-room"><code>npm install -g react-tools</code></div>

                
                <div className="top-breathing-room">You can run a one-time compile, or watch your <code>src</code> directory:</div>

                <div>(builds jsx in your <code>src/</code> dir places output in your <code>dist/</code> dir)</div>

                <div className="top-breathing-room"><code>jsx --watch src/ dist/</code></div>
            </TitledSlide>;
       }
    });
    return Slide;
});