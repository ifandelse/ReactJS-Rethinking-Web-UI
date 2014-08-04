/** @jsx React.DOM */
define([
	"react",
	"jsx!./QuizCarousel",
	"json!../../gameData.json"
], function(React, QuizCarousel, data) {
	var EightBitQuiz = React.createClass({
		render: function() {
			return <QuizCarousel channel="quiz" games={data.quiz} interval={23000}/>;
		}
	});
	return EightBitQuiz;
});