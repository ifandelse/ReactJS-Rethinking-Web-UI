/** @jsx React.DOM */
define([
    "react"
], function(React) {
    return React.createClass({

        render: function() {
            return <rect
                        x={this.props.x}
                        y={this.props.y}
                        rx="10"
                        ry="10"
                        width={this.props.width}
                        height={this.props.height}
                        fill="url(#Gradient01)"
                        stroke="black"
                        strokeWidth="1">
                    </rect>
       }
    });
});