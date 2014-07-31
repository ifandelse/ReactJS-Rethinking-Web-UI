/** @jsx React.DOM */
define([
	"react"
], function(React) {
	var EightBitPanel = React.createClass({
		render: function() {
			return <div>
                        <img className="img-rounded slide-image player-img one-player" src={this.props.imageDir + "GalagaShip1.png"} />
                        <span className="title-8-bit player">1P</span>
                        <img className="img-rounded slide-image player-img two-player" src={this.props.imageDir + "GalagaShip2.png"} />
                        <span className="title-8-bit player">2P</span>
                    </div>;
		}
	});
	return EightBitPanel;
});