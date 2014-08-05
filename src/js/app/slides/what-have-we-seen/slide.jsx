/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./seenWhat.md",
    "css!./seenWhat.css"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="see-what" title="So - What Have We Seen?" markdown={md} />;
       }
    });
    return Slide;
});