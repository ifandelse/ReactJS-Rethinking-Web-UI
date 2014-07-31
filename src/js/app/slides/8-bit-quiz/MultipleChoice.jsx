/** @jsx React.DOM */
define([
	"react",
	"lodash",
	"jsx!./AnswerStatus"
], function(React, _, AnswerStatus) {
	var MultipleChoice = React.createClass({
		getInitialState: function() {
			return {
				userAnswer: []
			};
		},

		handleSelection: function(e) {
			var idx = parseInt(e.target.name, 10);
			this.setState({
				userAnswer: e.target.checked ? 
					_.union(this.state.userAnswer, [idx]) :
					_.without(this.state.userAnswer, idx)
			});
		},

		render: function() {
			return <div>
				<ul>
				{
					this.props.choices.map(function(choice, idx) {
						return <li className="choice">
							<input onChange={this.handleSelection} type="checkbox" name={idx} />{choice}
						</li>;
					}.bind(this))	
				}
				</ul>
				{
					(this.state.userAnswer.length) ?
						<AnswerStatus correct={_.intersection(this.state.userAnswer,this.props.answer).length === this.props.answer.length} /> : null
				}
			</div>;
		}
	});

	return MultipleChoice;
});