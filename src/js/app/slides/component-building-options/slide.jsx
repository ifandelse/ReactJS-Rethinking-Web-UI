/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./buildingComponents.md"
], function(React, MarkdownSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <MarkdownSlide classes="building-comp" title="Building Components: Options" markdown={md} />;
       }
    });
    return Slide;
});