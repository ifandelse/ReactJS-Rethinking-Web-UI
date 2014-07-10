/** @jsx React.DOM */
define([
    "react",
    "jsx!./storytime/backboneBox",
    "jsx!./storytime/backboneLabel",
    "react.animate"
], function(React, BackboneBox, BackboneLabel) {
    return React.createClass({
        mixins: [React.Animate],

        steps: ["step1", "step2"],

        stepIdx: 0,

        getInitialState: function() {
            return {
                box_w: 400,
                box_h: 200,
                box_x: 150,
                box_y: 50,
                lbl_x: 230,
                lbl_y: 160,
                view_w: 0,
                model_w: 0
            };
        },

        step1: function() {
            this.animate({
                box_y: 0,
                box_h: 100,
                lbl_y:65
            }, 600, "bounce");
        },

        step2: function() {
            this.animate({
                view_w: 150,
                model_w: 150
            }, 600, "elastic");
        },

        next: function() {
            this[this.steps[this.stepIdx]]();
            this.stepIdx += 1;
        },

        render: function() {
            return <div className="upon fill" onClick={this.next}>
                <h1>Once Upon a Time</h1>
                <svg width="700" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="Gradient01">
                            <stop offset="20%" stopColor="#8CC5FF" />
                            <stop offset="90%" stopColor="#709ECC" />
                        </linearGradient>
                    </defs>

                    <BackboneBox
                        x={this.state.box_x}
                        y={this.state.box_y}
                        width={this.state.box_w}
                        height={this.state.box_h}/>
                    <BackboneLabel x={this.state.lbl_x} y={this.state.lbl_y} label="Observer <3" />
                    
                    <rect
                        x="150"
                        y="175"
                        rx="10"
                        ry="10"
                        width={this.state.view_w}
                        height="200"
                        fill="#69CC8C"
                        stroke="black"
                        strokeWidth="1">
                    </rect>
                    <rect
                        x="400"
                        y="175"
                        rx="10"
                        ry="10"
                        width={this.state.model_w}
                        height="200"
                        fill="#FFF99F"
                        stroke="black"
                        strokeWidth="1">
                    </rect>
                    
                </svg>
            </div>
       }
    });
});