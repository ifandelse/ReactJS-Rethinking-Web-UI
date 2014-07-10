/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./buildingComponents.md",
    "css!./buildingComponents"
], function(React, MarkdownSlide, md) {
    return React.createClass({
        render: function() {
            return <MarkdownSlide classes="building-comp" title="Building Components" markdown={md} />;
       }
    });
});