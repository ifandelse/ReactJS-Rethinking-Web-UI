/** @jsx React.DOM */
define([
	"react",
	"jsx!./AnswerStatus",
	"postal.react"
], function(React, AnswerStatus, reactPostal) {
	var QuizQuestion = React.createClass({

		mixins: [reactPostal],

		handleSelection: function(e) {
			this.publish("answer", { index: this.props.index, userAnswer: e.target.value[0] });
		},

		render: function() {
			var classes = ["question", "zoomIn", "animated", this.props.className || ""];
			return <div className={classes.join(" ")}>
				<h3>{this.props.question.text}</h3>
				<div>
					<ul>
					{
						this.props.question.choices.map(function(choice, idx) {
							return <li key={idx} className="choice">
								<input onChange={this.handleSelection} type="radio" name="answer" value={idx} checked={this.props.question.userAnswer == idx}/>{choice}
							</li>;
						}.bind(this))						
					}
					</ul>
					{
						(typeof this.props.question.userAnswer !== "undefined" && this.props.question.userAnswer !== null) ?
							<AnswerStatus correct={this.props.question.userAnswer == this.props.question.answer} /> : null
					}
				</div>
			</div>;
		}
	});

	return QuizQuestion;
});