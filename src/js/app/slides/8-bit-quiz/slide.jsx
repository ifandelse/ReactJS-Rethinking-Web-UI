/** @jsx React.DOM */
define([
	"react",
	"jsx!./QuizCarousel",
	"json!./data.json"
], function(React, QuizCarousel, data) {
	return React.createClass({
		render: function() {
			return <QuizCarousel channel="quiz" games={data.quiz}/>;
		}
	});
});