/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./reactOverview3.md"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="react-overview3" title="ReactJS Rendering" markdown={md} />;
       }
    });
    return Slide;
});