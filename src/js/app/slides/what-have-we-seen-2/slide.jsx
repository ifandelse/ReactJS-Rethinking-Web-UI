/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./what-have-we-seen-2.md",
    "css!./seenWhat2.css"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="seen-what-2" title="What Else Have We Seen?" markdown={md} />;
       }
    });
    return Slide;
});