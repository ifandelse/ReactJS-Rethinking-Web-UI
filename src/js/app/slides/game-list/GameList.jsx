/** @jsx React.DOM */
define([
	"react",
	"jsx!../lets-create-one/GameExample",
	"postal.react"
], function(React, Game, postalReact) {

	var GameList = React.createClass({

		mixins: [postalReact],

		getInitialState: function() {
			return { index: 0 };
		},

		componentWillMount: function() {
			this.subscribe("navigate", function(data){
				if(this[data.direction]) {
					this[data.direction]();
				}
			});
		},

		componentWillUnmount: function() {
			this.disposeSubscriptions();
		},

		next: function() {
			var index = this.state.index;
			var newIndex = 0;
			if(index < this.props.games.length - 1) {
				newIndex = index + 1;
			}
			this.setState({ index: newIndex });
		},

		prev: function() {
			var index = this.state.index;
			var newIndex = this.props.games.length - 1;
			if(index > 0) {
				newIndex = index - 1;
			}
			this.setState({ index: newIndex });
		},

		render: function() {
			return <div>
				{
					this.props.games.map(function(game, idx){
						return <Game name={game.name}
									       image={"/images/" + game.images[0]}
									       description={game.description}
									       isActive={this.state.index === idx} />
					}.bind(this))
				}
			</div>;
		}
	});

	return GameList;
});

