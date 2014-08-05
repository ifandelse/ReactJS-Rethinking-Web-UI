/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./soc.md",
    "css!./separation-of-concerns.css"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="soc" title="Separation of Concerns" markdown={md} />;
       }
    });
    return Slide;
});