/** @jsx React.DOM */
define([
	"react",
	"jsx!./AnswerStatus"
], function(React, AnswerStatus) {
	var SingleChoice = React.createClass({

		getInitialState: function() {
			return {
				userAnswer: undefined
			};
		},

		handleSelection: function(e) {
			this.setState({ userAnswer: e.target.value[0] });
		},

		render: function() {
			return <div>
				<ul>
				{
					this.props.choices.map(function(choice, idx) {
						return <li key={idx} className="choice">
							<input onChange={this.handleSelection} type="radio" name="answer" value={idx} />{choice}
						</li>;
					}.bind(this))						
				}
				</ul>
				{
					(typeof this.state.userAnswer !== "undefined") ?
						<AnswerStatus correct={this.state.userAnswer == this.props.answer} /> : null
				}
			</div>;
		}
	});

	return SingleChoice;
});