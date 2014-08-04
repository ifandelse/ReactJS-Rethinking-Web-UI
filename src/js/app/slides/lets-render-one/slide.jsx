/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "stepFsm",
], function(React, TitledSlide, StepFsm) {

    var images = [
        "lets-render-one1.png",
        "lets-render-one2.png",
        "lets-render-one3.png"
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
            return <TitledSlide classes="dev-tools" title="Rendering a Component">
        	   <img src={this.props.imageDir + this.state.image} className="slide-image" />
            </TitledSlide>;
       }
    });
    return Slide;
});