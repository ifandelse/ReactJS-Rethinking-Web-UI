/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./events.md"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="events" title="ReactJS &amp; Events" markdown={md} />;
       }
    });
    return Slide;
});