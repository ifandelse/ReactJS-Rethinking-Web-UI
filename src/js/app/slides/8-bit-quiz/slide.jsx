/** @jsx React.DOM */
define([
	"react",
	"jsx!./QuizCarousel"
], function(React, QuizCarousel) {
	var EightBitQuiz = React.createClass({
		render: function() {
			return <QuizCarousel channel="quiz" interval={23000}/>;
		}
	});
	return EightBitQuiz;
});