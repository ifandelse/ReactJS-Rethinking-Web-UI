/** @jsx React.DOM */
define([
    "react",
    "stepFsm"
], function(React, StepFsm) {

    var Slide = React.createClass({
        getInitialState: function() {
            return {
                image: ""
            }
        },

        componentWillMount: function() {
            this.fsm = new StepFsm({
                steps: [
                    function() {
                        this.setState({ image : "AboutMe_First.png" });
                    }.bind(this),
                    function() {
                        this.setState({ image : "AboutMe_LK.png" });
                    }.bind(this),
                    function() {
                        this.setState({ image : "AboutMe_IaE.png" });
                    }.bind(this)
                ]
            });
            this.fsm.start();
        },

        componentWillUnmount: function() {
            this.fsm.dispose();
        },

        render: function() {
            var style= { padding: "30px", fontFamily: "'Press Start 2P'", backgroundColor:"white", color:"black"};
            return <img src={this.props.imageDir + this.state.image} className="slide-image" />;
       }
    });
    return Slide;
});