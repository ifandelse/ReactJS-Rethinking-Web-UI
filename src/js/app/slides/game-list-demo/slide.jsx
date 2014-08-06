/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "jsx!../game-list/GameList",
    "jsx!../game-list/GameListNavigation",
    "json!../../gameData.json",
    "css!../game-list/game-list.css"
], function(React, TitledSlide, GameList, GameListNavigation, gameData) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="dev-tools" title="">
                  <GameList games={gameData.games} channel="gamelist" />
                <GameListNavigation channel="gamelist" /> 
              </TitledSlide>;
       }
    });
    return Slide;
});