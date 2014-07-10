/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./componentApi.md",
    "css!./componentApi"
], function(React, MarkdownSlide, md) {
    return React.createClass({
        render: function() {
            return <MarkdownSlide classes="component-api" title="Component API" markdown={md} />;
       }
    });
});