/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "stepFsm",
], function(React, TitledSlide, StepFsm) {

    var images = [
        "letscreate1.png",
        "letscreate2.png",
        "letscreate3.png",
        "letscreate4.png",
        "letscreate5.png",
        "letscreate6.png",
        "letscreate7.png",
        "letscreate8.png",
        "letscreate9.png",
        "letscreate11.png",
        "letscreate12.png",
        "letscreate13.png",
    ];

    function produceSteps(images) {
        return images.map(function(img) {
            return function() {
                this.setState({ image : img });
            }.bind(this)
        }.bind(this));
    }

    var Slide = React.createClass({
        getInitialState: function() {
            return {
                image: ""
            }
        },

        componentWillMount: function() {
            this.fsm = new StepFsm({
                steps: produceSteps.call(this, images)
            });
            this.fsm.start();
        },

        componentWillUnmount: function() {
            this.fsm.dispose();
        },

        render: function() {
            return <TitledSlide classes="dev-tools" title="Creating a Component">
               <img src={this.props.imageDir + this.state.image} className="slide-image" />
            </TitledSlide>;
       }
    });
    return Slide;
});