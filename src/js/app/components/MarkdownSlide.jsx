/** @jsx React.DOM */
define([
    "react",
    "markdown"
], function(React, markdown) {
    var MarkdownSlide = React.createClass({
        render: function() {
            var classes = ["slide"];
            if(this.props.classes && this.props.classes.length) { 
                classes = classes.concat(this.props.classes.split(" "));
            }
            var style = this.props.style || {};
            return <div className={classes.join(" ")} style={style}>
                <div>
                    <h1 className="slide-title">{this.props.title}</h1>
                </div>
                {
                    this.props.children
                }
                <div className="slide-children" dangerouslySetInnerHTML={{__html: markdown.toHTML(this.props.markdown)}}>
                </div>
            </div>;
       }
    });

    return MarkdownSlide;
});