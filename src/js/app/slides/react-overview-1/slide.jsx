/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./reactOverview.md",
    "css!./react-overview-1"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="react-overview-1" title="ReactJS Overview" markdown={md} />;
       }
    });
    return Slide;
});