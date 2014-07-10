/** @jsx React.DOM */
define([
    "react",
    "js/lib/react-bootstrap/Jumbotron",
    "css!./title.css"
], function(React, Jumbotron, css) {
    return React.createClass({
            render: function() {
                return <div className="title fill">
                	<Jumbotron className="fill">
                        <img src="/images/react.png" alt="ReactJS Logo" className="img-rounded" />
                		<h1>ReactJS</h1>
                		<h3>Rethinking Web UI</h3>
                	</Jumbotron>
                </div>;
		}
	});
});