/** @jsx React.DOM */
define([
	"react",
	"jsx!./SingleChoice"
], function(React, SingleChoice) {
	var QuizQuestion = React.createClass({
		render: function() {
			var classes = ["question", "zoomIn", "animated", this.props.className || ""];
			return <div className={classes.join(" ")}>
				<h3>{this.props.text}</h3>
				<SingleChoice choices={this.props.choices} answer={this.props.answer} />
			</div>;
		}
	});

	return QuizQuestion;
});