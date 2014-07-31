/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./reactOverview2.md",
    "css!./react-overview-2"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="react-overview-2" title="Compose With Components" markdown={md} />;
       }
    });
    return Slide;
});