/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "jsx!./GameList",
    "jsx!./GameListNavigation",
    "json!../../gameData.json",
    "css!./game-list.css"
], function(React, TitledSlide, GameList, GameListNavigation, gameData) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="game-demo-2" title="">
                  <GameList games={gameData.games} channel="gamelist" />
                <GameListNavigation channel="gamelist" /> 
              </TitledSlide>;
       }
    });
    return Slide;
});