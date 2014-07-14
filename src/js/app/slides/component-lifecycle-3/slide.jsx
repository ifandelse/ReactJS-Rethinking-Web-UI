/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./componentApi3.md"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="component-api3" title="Component Lifecycle Methods" markdown={md} />;
       }
    });
    return Slide;
});