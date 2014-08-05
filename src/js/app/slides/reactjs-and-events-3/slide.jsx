/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./events3.md",
    "css!./reactjs-and-events-3.css"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="events3" title="ReactJS &amp; Events" markdown={md}>
            </MarkdownSlide>;
       }
    });
    return Slide;
});