/** @jsx React.DOM */
define([
	"react"
], function(React) {
	var AnswerStatus = React.createClass({
		render: function() {
			return this.props.correct ?
				<div className="answer">
					<i className="fa fa-check" />Correct!
				</div> :
				<div className="answer">
					<i className="fa fa-bomb" />Try Again
				</div>;
		}
	});

	return AnswerStatus;
});