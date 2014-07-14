/** @jsx React.DOM */
define([
    "react",
    "js/lib/react-bootstrap/Jumbotron"
], function(React, Jumbotron, css) {
    var Slide = React.createClass({
            render: function() {
                return <div className="title fill">
                	<Jumbotron className="fill">
                        <img src={this.props.imageDir + "react.png"} alt="ReactJS Logo" className="img-rounded slide-image" />
                		<h1>ReactJS</h1>
                		<h3 className="slide-headline slide-headline-alt">Rethinking Web UI</h3>
                	</Jumbotron>
                </div>;
		}
	});
    return Slide;
});