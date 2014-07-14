/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./sot.md",
    "css!./sot"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="sot" title="'Separation of Technologies'" markdown={md} />;
       }
    });
    return Slide;
});