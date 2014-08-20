/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "jsx!./GameExample",
    "css!./our-first-component.css"
], function(React, TitledSlide, GameExample) {

    var galaga = {
        name: "Galaga",
        description: "The sequel to Galaxian, Galaga was a 'fixed' shooter where the player, controlling a ship at the bottom of the screen, battles various enemy formations, with increasing difficulty over each level.",
        image: "/images/galaga-animated.gif"
    }

    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="dev-tools" title="Let's Build One">
                <aside>(gradually-ish)</aside>
            	<GameExample name={galaga.name} description={galaga.description} image={galaga.image} />
            </TitledSlide>;
       }
    });
    return Slide;
});