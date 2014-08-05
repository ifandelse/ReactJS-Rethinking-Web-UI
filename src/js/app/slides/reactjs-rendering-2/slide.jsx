/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./reactjs-rendering-2.md",
    "css!./reactjs-rendering-2.css"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="reactjs-rendering-2" title="ReactJS Rendering" markdown={md} />;
       }
    });
    return Slide;
});