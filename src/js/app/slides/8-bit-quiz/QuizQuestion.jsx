/** @jsx React.DOM */
define([
	"react",
	"jsx!./SingleChoice",
	"jsx!./MultipleChoice"
], function(React, SingleChoice, MultipleChoice) {
	var QuizQuestion = React.createClass({
		render: function() {
			var classes = ["question", "zoomIn", "animated", this.props.className || ""];
			return <div className={classes.join(" ")}>
				<h3>{this.props.text}</h3>
				{
					this.props.type === "single" ?
						<SingleChoice choices={this.props.choices} answer={this.props.answer} /> : 
						<MultipleChoice choices={this.props.choices} answer={this.props.answer} />
				}
			</div>;
		}
	});

	return QuizQuestion;
});