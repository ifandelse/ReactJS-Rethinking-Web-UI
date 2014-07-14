/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./flux2.md"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="flux2" title="Flux – In a Nutshell" markdown={md} />;
       }
    });
    return Slide;
});