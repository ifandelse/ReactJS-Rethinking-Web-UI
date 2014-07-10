/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./seenWhat.md",
    "css!./seenWhat"
], function(React, MarkdownSlide, md) {
    return React.createClass({
        render: function() {
            return <MarkdownSlide classes="see-what" title="So - What Have We Seen?" markdown={md} />;
       }
    });
});