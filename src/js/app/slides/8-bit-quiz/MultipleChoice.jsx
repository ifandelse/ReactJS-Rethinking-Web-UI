/** @jsx React.DOM */
define([
	"react"
], function(React) {
	var MultipleChoice = React.createClass({
		render: function() {
			return <div>
				<ul>
				{
					this.props.choices.map(function(choice, idx) {
						return <li className="choice">
							<input type="checkbox" name={idx} />{choice}
						</li>;
					})	
				}
				</ul>
			</div>;
		}
	});

	return MultipleChoice;
});