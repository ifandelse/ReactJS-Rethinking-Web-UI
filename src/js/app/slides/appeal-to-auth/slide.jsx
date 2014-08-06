/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "stepFsm",
    "css!./appeal1.css"
], function(React, TitledSlide, StepFsm) {
    var Slide = React.createClass({
        getInitialState: function() {
            return {
                step: 0
            };
        },

        componentWillMount: function() {
            this.fsm = new StepFsm({
                steps: [
                    function() {
                        this.setState({ step : 0 });
                    }.bind(this),
                    function() {
                        this.setState({ step : 1 });
                    }.bind(this),
                ]
            });
            this.fsm.start();
        },

        componentWillUnmount: function() {
            this.fsm.dispose();
        },

        render: function() {
            return <TitledSlide classes="">
                {
                    this.state.step === 0 ?
                        <div onClick={this.advance}>
                            <div className="dijkstra-goto">
                                ** Prologue **
                            </div>
                            <img className="dijkstra-goto-img" src={this.props.imageDir + "GotoUsers.png"} />  
                            <div className="dijkstra-goto">
                                Words of Wisdom<br/>From Dijkstra
                            </div>
                        </div> :
                        <div className="appeal1 media">
                            <img className="slide-image appeal-img" src={this.props.imageDir + "Dijkstra.jpg"} />  
                            <div className="bd quote quote-dijkstra">
                                “The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise.” – Dijkstra
                            </div>
                        </div> 
                }
                
            </TitledSlide>;
       }
    });
    return Slide;
});