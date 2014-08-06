/** @jsx React.DOM */
define([
	"react"
], function(React) {
	var GamePicGrid = React.createClass({
		render: function() {
   			var style= { maxHeight: "200px" };
			return <div>
                <h2>We Have Eight Classic Games</h2>
				<div>
                    <img style={style} className="slide-image animated flipInX" src="/images/spaceinvader.png" /> 
                    <img style={style} className="slide-image animated flipInY" src="/images/maze-war.png" />
                    <img style={style} className="slide-image animated flipInX" src="/images/defender.png" />   
                    <img style={style} className="slide-image animated flipInY" src="/images/spacewar_300b.jpg" /> 
                </div>
                <div>
                    <img style={style} className="slide-image animated flipInY" src="/images/AtariPong.png" />  
                    <img style={style} className="slide-image animated flipInX" src="/images/pacman.png" />  
                    <img style={style} className="slide-image animated flipInY" src="/images/adventure.jpg" /> 
                    <img style={style} className="slide-image animated flipInX" src="/images/galaga.png" />        
                </div>
            </div>;
		}
	});

	return GamePicGrid;
});