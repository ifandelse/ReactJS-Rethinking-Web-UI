/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "stepFsm",
    "css!./game2-list.css"
], function(React, TitledSlide, StepFsm, GameList, GameListNavigation, gameData) {     

    var states = [
        { image: "gamelist-2a.png", label: "Prev/Next Now call `executeTransition`", overlay: "map_gameList.png" },
        { image: "gamelist-2b.png", label: "`executeTransition` fades old game out, new game in" },
        { image: "gamelist-2c.png", label: "We use the `setState` optional callback argument" },
        { label: "First, we set transitionStatus to 'inactivating'" },
        { label: "The callback arg executes after the render cycle." },
        { image: "gamelist-2d.png", label: "We then queue up another state change..." },
        { label: "We change the index & set transitionStatus to activating" },
        { image: "gamelist-2f.png", label: "We've updated our render method as well" },
        { image: "gamelist-2g.png", label: "We're no longer mapping over our game list" },
        { image: "gamelist-2h.png", label: "We're passing a transitionStatus prop to the Game component", overlay: "map_gameList.png" },
        { image: "gamelist-2i.png", label: "Yay for React Add-ons!", overlay: "map_game.png" },
        { image: "gamelist-2j.png", label: "`classSet` makes dynamically selected classes a breeze" },
        { image: "gamelist-2k.png", label: "`classSet` makes dynamically selected classes a breeze", overlay: "map_game.png" }
    ];

    function produceSteps(states) {
        return states.map(function(st) {
            return function() {
                this.setState(st);
            }.bind(this)
        }.bind(this));
    }

    var Slide = React.createClass({
        getInitialState: function() {
            return {
                image: ""
            }
        },

        componentWillMount: function() {
            this.fsm = new StepFsm({
                steps: produceSteps.call(this, states)
            });
            this.fsm.start();
        },

        componentWillUnmount: function() {
            this.fsm.dispose();
        },

        render: function() {
            return <TitledSlide classes="game-list-2" title={this.state.label}>
                  {
                    this.state.overlay ?
                      <img src={this.props.imageDir + this.state.overlay} className="game2-map-overlay" /> :
                      null
                  }
                  
                  <div className="scroller scroller-lg">
                      <img src={this.props.imageDir + this.state.image} className="slide-image-scrollable" />
                  </div>
              </TitledSlide>;
       }
    });
    return Slide;
});
  