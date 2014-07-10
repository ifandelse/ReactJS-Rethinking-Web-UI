/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./pros.md",
    "css!./pros"
], function(React, MarkdownSlide, md) {
    return React.createClass({
        render: function() {
            return <MarkdownSlide classes="pros" title="Pros" markdown={md} />;
       }
    });
});