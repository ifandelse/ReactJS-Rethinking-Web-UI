/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "jsx!./GamePicGrid",
    "jsx!./GameDataImg",
    "stepFsm"
], function(React, TitledSlide, GamePicGrid, GameDataImg, StepFsm) {
    var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

    var Slide = React.createClass({

        getInitialState: function() {
            return {
                step: 0
            }
        },

        componentWillMount: function() {
            this.fsm = new StepFsm({
                steps: [
                    function() {
                        this.setState({ step : 0 });
                    }.bind(this),
                    function() {
                        this.setState({ step : 1 });
                    }.bind(this)
                ]
            });
            this.fsm.start();
        },

        componentWillUnmount: function() {
            this.fsm.dispose();
        },

        render: function() {
            return <TitledSlide classes="dev-tools" title="Composing With Components">
                { this.state.step === 0 ? <GamePicGrid /> : null }
                { this.state.step === 1 ? <GameDataImg /> : null }
            </TitledSlide>;
       }
    });
    return Slide;
});