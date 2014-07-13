/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./events3.md"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="events3" title="ReactJS &amp; Events" markdown={md}>
            </MarkdownSlide>;
       }
    });
    return Slide;
});