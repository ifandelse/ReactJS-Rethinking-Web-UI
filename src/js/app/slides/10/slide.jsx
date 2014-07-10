/** @jsx React.DOM */
define([
    "react",
    "jsx!markdownslide",
    "text!./slide.md",
    "css!./dataBinding"
], function(React, MarkdownSlide, md) {
    return React.createClass({
        render: function() {
            return <MarkdownSlide classes="binding" title="Abstracting for Precision" markdown={md}>
            	<h2>Data Binding</h2>
            	<img src="js/app/slides/10/databinding.png" />
				<div><cite>http://fluxxor.com/images/mvc-simple.png</cite></div>
            </MarkdownSlide>;
       }
    });
});