/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./componentApi2.md",
    "css!./componentApi2"
], function(React, MarkdownSlide, md) {
    return React.createClass({
        render: function() {
            return <MarkdownSlide classes="component-api2" title="Component API" markdown={md} />;
       }
    });
});