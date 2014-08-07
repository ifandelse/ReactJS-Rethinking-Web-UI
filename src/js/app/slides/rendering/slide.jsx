/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "stepFsm"
], function(React, TitledSlide, StepFsm) {        

    var states = [
        { image: "rendering1.png" }, 
        { image: "rendering2.png" }, 
        { image: "rendering3.png" },    
    ];

    function produceSteps(states) {
        return states.map(function(st) {
            return function() {
                this.setState(st);
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
                steps: produceSteps.call(this, states)
            });
            this.fsm.start();
        },

        componentWillUnmount: function() {
            this.fsm.dispose();
        },

        render: function() {
            return <TitledSlide>
                  <img src={this.props.imageDir + this.state.image} className="slide-image slide-image-fill slide-image-white animated fadeIn" />
              </TitledSlide>;
       }
    });
    return Slide;
});
  