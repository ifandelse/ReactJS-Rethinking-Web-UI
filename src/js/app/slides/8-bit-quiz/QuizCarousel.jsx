/** @jsx React.DOM */
define([
	"react",
    "js/lib/react-bootstrap/Carousel",
    "postal.react",
    "jsx!./GameSlide",
    "css!./eight-bit-quiz.css"
], function(React, Carousel, reactPostal, GameSlide) {
	return React.createClass({

		mixins: [reactPostal],

		getInitialState: function() {
			return {
				isPaused: false
			};
		},

		componentWillMount: function() {
			this.subscribe("slide.toggle", function(data, env){
				this.setState({ isPaused: data.showQuestion });
			});
		},

		render: function() {
			return this.transferPropsTo(
				<Carousel slide={!this.state.isPaused}
					controls={!this.state.isPaused}
					indicators={!this.state.isPaused}
					className="quiz-carousel">
					{
						this.props.games.map(function(game, idx){
							return this.transferPropsTo(<GameSlide
										key={idx}
										index={idx}
										name={game.name}
										image={"/images/" + game.images[0]}
										question={game.question}
										description={game.description}/>)
						}.bind(this))
					}
				</Carousel>
			);
		}
	});
});