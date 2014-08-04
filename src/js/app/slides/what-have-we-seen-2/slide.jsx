/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./what-have-we-seen-2.md"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="see-what" title="What Else Have We Seen?" markdown={md} />;
       }
    });
    return Slide;
});