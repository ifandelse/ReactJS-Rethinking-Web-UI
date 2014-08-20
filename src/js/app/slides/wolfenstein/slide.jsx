/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "stepFsm",
    "css!./wolfenstein.css"
], function(React, TitledSlide, StepFsm) {
    var Slide = React.createClass({
        getInitialState: function() {
            return {
                step: undefined
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
            return <TitledSlide classes="wolfenstein">
                <h2 className="slide-headline-alt">Wolfenstein 3D Clone using ReactJS!</h2>
                {
                    this.state.step === 0 ?
                        <img src={this.props.imageDir + "wolfenstein.png"} 
                             className="slide-image"/> :
                        <iframe src="http://www.petehunt.net/wolfenstein3D-react/wolf3d.html" />
                }
            </TitledSlide>;
       }
    });
    return Slide;
});