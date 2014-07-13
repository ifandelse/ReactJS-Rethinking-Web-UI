/** @jsx React.DOM */
define([
    "react"
], function(React) {
    var TitledSlide = React.createClass({
        render: function() {
            var classes = ["slide"];
            if(this.props.classes && this.props.classes.length) { 
                classes = classes.concat(this.props.classes.split(" "));
            }
            return <div className={classes.join(" ")}> 
                <div>
                    <h1 className="slide-title">{this.props.title}</h1>
                </div>
                <div className="slide-children"> { this.props.children }</div>
            </div>;
       }
    });
    return TitledSlide;
});