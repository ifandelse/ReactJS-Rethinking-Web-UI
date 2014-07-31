/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./whatif.md"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="whatif" title="What If..." markdown={md} />;
       }
    });
    return Slide;
});