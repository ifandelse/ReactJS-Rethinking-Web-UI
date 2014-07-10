/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./cons.md",
    "css!./cons"
], function(React, MarkdownSlide, md) {
    return React.createClass({
        render: function() {
            return <MarkdownSlide classes="cons" title="Cons" markdown={md} />;
       }
    });
});