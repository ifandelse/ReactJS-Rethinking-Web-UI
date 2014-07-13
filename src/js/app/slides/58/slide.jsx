/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="jsx-tooling3" title="JSX Tooling">
                <h2 className="slide-headline-alt">Build-tool &amp; IDE Integrations</h2>

                <ul>
                    <li>Sublime Text, emacs, Atom and Vim</li>
                    <li>RequireJS, Webpack &amp; Browserify support*</li>
                    <li>Ruby (Rails), Python &amp; .NET support</li>
                    <li>Gulp, Grunt, Brunch and more</li>
                </ul>

            </TitledSlide>;
       }
    });
    return Slide;
});