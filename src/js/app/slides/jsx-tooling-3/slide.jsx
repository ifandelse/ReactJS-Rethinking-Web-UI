/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./jsx-tooling-3.css"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="jsx-tooling-3" title="JSX Tooling">
                <h2 className="slide-headline-alt">Build-tool &amp; IDE Integrations</h2>

                <ul>
                    <li>Sublime Text, Textmate, emacs, Atom and Vim</li>
                    <li>RequireJS, Webpack &amp; Browserify support*</li>
                    <li>Node, Ruby (Rails), Python &amp; .NET support</li>
                    <li>Gulp, Grunt, Brunch and sbt (Scala) <em>much</em> more</li> 
                </ul>
                <aside>Tons more available on the <a href="https://github.com/facebook/react/wiki/Complementary-Tools">Complementary Tools page</a></aside>
            </TitledSlide>;
       }
    });
    return Slide;
});