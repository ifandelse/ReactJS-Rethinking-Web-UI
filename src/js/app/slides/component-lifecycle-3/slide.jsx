/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./componentApi3.md",
    "css!./lifecycle3.css"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="lifecycle3" title="Component Lifecycle Methods" markdown={md} />;
       }
    });
    return Slide;
});