/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "stepFsm",
    "css!./warmFuzzy"
], function(React, TitledSlide, StepFsm) {
    var Slide = React.createClass({
        getInitialState: function() {
            return {
                title: "",
                step: undefined
            }
        },

        componentWillMount: function() {
            this.fsm = new StepFsm({
                steps: [
                    function() {
                        this.setState({ step : 0, title: "But Now..." });
                    }.bind(this),
                    function() {
                        this.setState({ step : 1, title: "Why JSX?" });
                    }.bind(this)
                ]
            });
            this.fsm.start();
        },

        componentWillUnmount: function() {
            this.fsm.dispose();
        },

        render: function() {
            return <TitledSlide classes="warm-fuzzy" title={this.state.title}>
                {
                    this.state.step === 0 ?
                        <div className="slide-image complete-me">
                            <div className="eight-bit-type jsx">JSX</div>
                            <div className="eight-bit-type">You Complete Me</div>
                            <img className="" src={this.props.imageDir + "galaga-complete-me.png"} />
                        </div> :
                        <div className="bd">
                            <ul>
                                <li>Familiar Markup Paradigm</li>
                                <li>Powerful JavaScript support</li>
                                <li>Separation of Technology vs Concerns</li>
                            </ul>
                        </div>
                }
            </TitledSlide>;
       }
    });
    return Slide;
});