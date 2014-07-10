/** @jsx React.DOM */
define([
    "react",
    "markdown"
], function(React, markdown) {
    return React.createClass({
        render: function() {
            var classes = ["slide", "fill"];
            if(this.props.classes && this.props.classes.length) { 
                classes = classes.concat(this.props.classes.split(" "));
            }
            var style = this.props.style || {};
            return <div className={classes.join(" ")} style={style}>
                <div>
                    <h1>{this.props.title}</h1>
                </div>
                {
                    this.props.children
                }
                <div className="content" dangerouslySetInnerHTML={{__html: markdown.toHTML(this.props.markdown)}}>
                </div>
            </div>;
       }
    });
});