/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./reactOverview3.md",
    "css!./reactjs-rendering.css"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="reactjs-rendering" title="ReactJS Rendering" markdown={md} />;
       }
    });
    return Slide;
});