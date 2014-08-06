/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "stepFsm",
    "css!./immediate-mode-2.css"
], function(React, TitledSlide, StepFsm) {        

    var states = [
        { quote: "With immediate mode UI, 'widgets' are no longer stateful objects requiring data synchronization strategies." },
        { quote: "Instead, the UI goes from being a stateful collection of objects to a real time sequence of method calls." }
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
                quote: ""
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
            return <TitledSlide classes="immediate-mode-2" title="">
                  <blockquote>{ this.state.quote }</blockquote>
              </TitledSlide>;
       }
    });
    return Slide;
});
  