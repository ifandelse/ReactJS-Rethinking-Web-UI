/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "stepFsm",
    "jsx!./GameList",
    "jsx!./GameListNavigation",
    "json!../../gameData.json",
    "css!./game-list.css"
], function(React, TitledSlide, StepFsm, GameList, GameListNavigation, gameData) {

    // var states = [
    //     { image: "gamelist8.png", label: "The Game"  },
    //     { image: "gamelist9.png"  },
    //     { image: "gamelist10.png", label: "The Game" },
    //     { image: "gamelist17.png", label: "The GameList" },
    //     { image: "gamelist18.png" },
    //     { image: "gamelist19.png" },
    //     { image: "gamelist20.png" },
    //     { image: "gamelist21.png", label: "The GameList" },
    //     { image: "gamelist11.png", label: "Navigation Component" },
    //     { image: "gamelist12.png" },
    //     { image: "gamelist13.png" },
    //     { image: "gamelist14.png" },
    //     { image: "gamelist15.png" },
    //     { image: "gamelist16.png", label: "Navigation Component" }
    // ];
        

    var states = [
        { image: "gamelist0.png", label: "", overlay: null},
        { image: "gamelist1.png", label: "If We *Just* Want a List", overlay: "map_gameList.png"  },
        { image: "gamelist2.png"  },
        { image: "gamelist3.png"  },
        { image: "gamelist4.png"  },
        { image: "gamelist5.png", label: "If We *Just* Want a List" },
        { image: "gamelist6.png", label: "Showing Only One..." },
        { image: "gamelist7.png", overlay: "map_gameList.png"},
        { image: "gamelist8.png", overlay: "map_game.png"},
        { image: "gamelist9.png"  },
        { image: "gamelist10.png", label: "Showing Only One...", overlay: "map_game.png" },
        { image: "gamelist11.png", label: "Navigation Component", overlay: "map_nav.png" },
        { image: "gamelist12.png" },
        { image: "gamelist13.png" },
        { image: "gamelist14.png" },
        { image: "gamelist15.png" },
        { image: "gamelist16.png", label: "Navigation Component", overlay: "map_nav.png" },
        { image: "gamelist17.png", label: "Updating the GameList", overlay: "map_gameList.png" },
        { image: "gamelist18.png" },
        { image: "gamelist19.png" },
        { image: "gamelist20.png" },
        { image: "gamelist21.png", label: "Updating the GameList" }
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
            return <TitledSlide classes="dev-tools" title={this.state.label}>
                  {
                    this.state.overlay ?
                      <img src={this.props.imageDir + this.state.overlay} className="game-map-overlay" /> :
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
  