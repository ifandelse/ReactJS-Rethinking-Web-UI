/** @jsx React.DOM */
define([
    "react",
    "js/lib/react-bootstrap/Jumbotron",
    "jsx!./8BitPanel",
    "lodash",
    "react.animate",
    "css!./title"
], function(React, Jumbotron, EightBitPanel, _) {
    var Slide = React.createClass({

            mixins: [React.Animate],

            getInitialState: function() {
                return {
                    presStyle: "normal",
                    staticOpacity: 0,
                    staticImgIdx : 1
                };
            },

            toggleStyle: function(done) {
                var done = done || function() {};
                var state = this.state;
                var newState = {
                    presStyle: state.presStyle === "normal" ? "8-bit" : "normal",
                    staticImgIdx: state.staticImgIdx === 4 ? 1 : state.staticImgIdx + 1
                }
                this.setState(newState, done);
            },

            animateTransition: function() {
                var self = this;
                if(!this.animating) {
                    this.animating = true;
                    setTimeout(function() {
                        self.animate({staticOpacity: 1}, _.random(200, 250), function() {
                            self.toggleStyle(function() {
                                self.animate({staticOpacity: 0}, _.random(150, 250), function() {
                                    self.animating = false;
                                    setTimeout(function(){
                                        self.animateTransition();
                                    },_.random(4000, 7000));
                                });
                            });
                        });
                    }, _.random(4000, 7000));
                }
            },

            render: function() {
                setTimeout(function() { this.animateTransition() }.bind(this), 100);
                var staticStyle = { opacity: this.state.staticOpacity };
                return <div className="title fill">
                	<Jumbotron className="fill title">
                        <h1 className={"title-" + this.state.presStyle}>ReactJS</h1>
                        <img src={this.props.imageDir + "react-" + this.state.presStyle + ".png"} alt="ReactJS Logo" className="img-rounded slide-image title-img" />
                		<h3 className={"slide-headline slide-headline-alt sub-title-" + this.state.presStyle}>
                            { this.state.presStyle === "normal" ? "Rethinking Web UI" : "PRESS START" }
                        </h3>
                        {(this.state.presStyle === "8-bit") ? this.transferPropsTo(<EightBitPanel/>) : null}
                	</Jumbotron>
                    <div style={staticStyle} className="static-overlay">
                        <img className="static-img" src={this.props.imageDir + "static" + this.state.staticImgIdx + ".gif"} />
                    </div>
                </div>;
		}
	});
    return Slide;
});