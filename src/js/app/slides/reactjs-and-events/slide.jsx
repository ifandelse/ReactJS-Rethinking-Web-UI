/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./events.md",
    "css!./reactjs-and-events.css"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="events" title="ReactJS &amp; Events" markdown={md} />;
       }
    });
    return Slide;
});