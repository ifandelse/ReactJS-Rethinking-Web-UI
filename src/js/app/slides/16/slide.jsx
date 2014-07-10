/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./reactOverview.md",
    "css!./reactOverview"
], function(React, MarkdownSlide, md) {
    return React.createClass({
        render: function() {
            return <MarkdownSlide classes="react-overview" title="ReactJS Overview" markdown={md} />;
       }
    });
});