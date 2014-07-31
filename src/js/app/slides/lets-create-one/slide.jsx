/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "stepFsm"
], function(React, TitledSlide, StepFsm) {

    var Slide = React.createClass({
        getInitialState: function() {
            return {
                image: ""
            }
        },

        componentWillMount: function() {
            this.fsm = new StepFsm({
                steps: []
            });
            this.fsm.start();
        },

        componentWillUnmount: function() {
            this.fsm.dispose();
        },

        render: function() {
            return <TitledSlide classes="dev-tools" title="Let's Build One">
            	
            </TitledSlide>;
       }
    });
    return Slide;
});