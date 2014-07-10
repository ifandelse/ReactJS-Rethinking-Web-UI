/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./slide.md",
    "css!./wat"
], function(React, MarkdownSlide, md) {
    return React.createClass({
        render: function() {
            return <MarkdownSlide classes="binding" title="In other words..." markdown={md} />;
       }
    });
});