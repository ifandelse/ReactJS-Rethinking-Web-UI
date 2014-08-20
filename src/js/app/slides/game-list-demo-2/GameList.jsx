/** @jsx React.DOM */
define([
	"react",
	"jsx!./GameExample",
	"postal.react"
], function(React, Game, postalReact) {

	var GameList = React.createClass({

		mixins: [postalReact],

		getInitialState: function() {
			return { index: 0, transitionStatus: "activating" };
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
			this.executeTransition(newIndex);
		},

		prev: function() {
			var index = this.state.index;
			var newIndex = this.props.games.length - 1;
			if(index > 0) {
				newIndex = index - 1;
			}
			this.executeTransition(newIndex);
		},

		executeTransition: function(newIndex) {
			this.setState(
				{ transitionStatus: "inactivating" },
				function() {
					setTimeout(function() {
						this.setState({
							index: newIndex,
							transitionStatus: "activating"
						});
					}.bind(this), 500);
				}.bind(this)
			);
		},

		render: function() {
			var game = this.props.games[this.state.index];
			return <div>
				<Game name={game.name}
				      image={"/images/" + game.images[0]}
				      description={game.description}
				      transitionStatus={this.state.transitionStatus} />
			</div>;
		}
	});

	return GameList;
});

