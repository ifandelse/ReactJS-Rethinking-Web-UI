/** @jsx React.DOM */
define([
    "react"
], function(React) {

    var Slide = React.createClass({
        render: function() {
            var style= { padding: "30px", fontFamily: "'Press Start 2P'", backgroundColor:"white", color:"black"};
            return <div>
                <h2 className="slide-headline-alt">Wolfenstein 3D Clone using ReactJS!</h2>
                <img src={this.props.imageDir + "wolfenstein.png"} className="slide-image" />
            </div>;
       }
    });
    return Slide;
});