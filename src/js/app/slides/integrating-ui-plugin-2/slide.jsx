/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "stepFsm",
    "css!./integrating-ui-2.css"
], function(React, TitledSlide, StepFsm) {

    var states = [
        { image: "integrating0.png", label: "Kendo Radial Gauge Component - Render is slim" }, 
        { image: "integrating1.png", label: "`componentDidMount` fires after component renders" },
        { image: "integrating2.png", label: "We use a helper method to get the actual DOM node" },
        { image: "integrating3.png", label: "We pass the element to jQuery and call the Kendo widget on it." },
        { image: "integrating4.png", label: "We pass in props for widget configuration" },
        { image: "integrating5.png", label: "`componentWillReceiveProps` fires when new props come in" },
        { image: "integrating5.png", label: "Kendo widget animates value change if different" }
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
                image: "",
                label: ""
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
            return <TitledSlide classes="integrating-ui-2" title={this.state.label}>
               <div className="scroller scroller-lg">
                  <img src={this.props.imageDir + this.state.image} className="slide-image-scrollable" />
              </div>
            </TitledSlide>;
       }
    });
    return Slide;
});