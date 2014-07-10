/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./reactOverview3.md",
    "css!./reactOverview3"
], function(React, MarkdownSlide, md) {
    return React.createClass({
        render: function() {
            return <MarkdownSlide classes="react-overview3" title="ReactJS Rendering" markdown={md} />;
       }
    });
});