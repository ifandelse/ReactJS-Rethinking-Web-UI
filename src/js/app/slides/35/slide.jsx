/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./events.md",
    "css!./events"
], function(React, MarkdownSlide, md) {
    return React.createClass({
        render: function() {
            return <MarkdownSlide classes="events" title="ReactJS &amp; Events" markdown={md} />;
       }
    });
});