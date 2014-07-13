/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="jsx-tooling" title="JSX Tooling">
                <h2 className="slide-headline-alt">Parsing JSX on-the-fly (in the browser)</h2>

                <ul>
                    <li>Include the <code>JSXTransformer.js</code> file in your page</li>
                    <li>Source your JSX file(s) with a script <code>type</code> of <code>text/jsx</code></li>
                    <li>Don't do this in production. Kittens die.</li>
                </ul>

            </TitledSlide>;
       }
    });
    return Slide;
});