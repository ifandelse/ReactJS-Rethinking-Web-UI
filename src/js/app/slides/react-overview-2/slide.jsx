/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./reactOverview2.md"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="react-overview2" title="ReactJS Overview" markdown={md} />;
       }
    });
    return Slide;
});