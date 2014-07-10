/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./flux2.md",
    "css!./flux2"
], function(React, MarkdownSlide, md) {
    return React.createClass({
        render: function() {
            return <MarkdownSlide classes="flux2" title="Flux" markdown={md} />;
       }
    });
});