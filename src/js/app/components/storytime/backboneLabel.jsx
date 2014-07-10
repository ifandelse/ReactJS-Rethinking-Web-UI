/** @jsx React.DOM */
define([
    "react"
], function(React) {
    return React.createClass({

        render: function() {
            var txtStyle= { fontSize: "32pt"};
            return <text style={txtStyle} x={this.props.x} y={this.props.y} id="bb">{this.props.label}</text>
       }
    });
});