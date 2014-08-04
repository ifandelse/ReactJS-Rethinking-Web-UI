/** @jsx React.DOM */
define([
	"react",
    "js/lib/react-bootstrap/CarouselItem",
	"postal.react",
	"jsx!./QuizQuestion",
	"jsx!./GameBlurb"
], function(React, CarouselItem, reactPostal, QuizQuestion, GameBlurb) {
	var GameItem = React.createClass({

		mixins: [reactPostal],

		getInitialState: function() {
			return {
				showQuestion: false,
				isAnswered: false,
				answer: [],
				imgBlurbClasses: ["slide-image", "quiz-image"],
				imgQuizClasses: ["slide-image", "quiz-image", "quiz-image-small"]
			};
		},

		componentWillUnmount: function() {
			this.disposeSubscriptions();
		},

		toggleQuiz: function() {
			var newState = { showQuestion: !this.state.showQuestion };
			this.setState(newState);
			this.publish("slide.toggle", newState);
		},

		render: function() {
			var imageClasses = this.state.showQuestion ? this.state.imgQuizClasses : this.state.imgBlurbClasses;
			return this.transferPropsTo(
				<CarouselItem>
					<img data-index={this.props.index}
						 onClick={this.toggleQuiz}
						 className={imageClasses.join(" ")}
						 alt={this.props.name}
						 src={this.props.image} />
					{
						this.state.showQuestion ? 
							<QuizQuestion text={this.props.question.text}
										  choices={this.props.question.choices}
										  type={this.props.question.type}
										  answer={this.props.question.answer} />:
							<GameBlurb name={this.props.name}
									   active={this.props.active}
									   trivia={[this.props.description].concat(this.props.trivia)} />
				
					}
				</CarouselItem>
			);
		}
	});

	return GameItem;
});