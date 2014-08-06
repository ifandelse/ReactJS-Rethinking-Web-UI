/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "stepFsm",
], function(React, TitledSlide, StepFsm) {

    var states = [
        { image: "inclusive_exclusive.png", text: "`printInclusive` / `printExclusive`" },
        { image: "wasted.png", text: "`printWasted`" },
        { image: "printdom.png", text: "`printDOM`" }
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
                text: ""
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
            return <TitledSlide classes="dev-tools" title="Performance Tools">
                <h2 className="slide-headline-alt"><code>{this.state.text}</code></h2>
               <img src={this.props.imageDir + this.state.image} className="slide-image" />
            </TitledSlide>;
       }
    });
    return Slide;
});