/** @jsx React.DOM */
define([
    "react"
], function(React) {
    return React.createClass({
        render: function() {
            var classes = ["slide", "fill"];
            if(this.props.classes && this.props.classes.length) { 
                classes = classes.concat(this.props.classes.split(" "));
            }
            return <div className={classes.join(" ")}> 
                <div>
                    <h1>{this.props.title}</h1>
                </div>
                <div> { this.props.children }</div>
            </div>;
       }
    });
});