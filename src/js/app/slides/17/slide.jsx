/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./reactOverview2.md",
    "css!./reactOverview2"
], function(React, MarkdownSlide, md) {
    return React.createClass({
        render: function() {
            return <MarkdownSlide classes="react-overview2" title="ReactJS Overview" markdown={md} />;
       }
    });
});