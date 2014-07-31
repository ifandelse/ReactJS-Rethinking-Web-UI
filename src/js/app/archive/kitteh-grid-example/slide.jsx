/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "jsx!./KittehGrid",
    "lodash",
    "css!./kitties"
], function(React, TitledSlide, KittehGrid, _) {

    var Slide = React.createClass({

    	getInitialState: function() {
    		return {
    			rowCount: 3
    		}
    	},

    	tryAgain: function() {
    		this.setState({ rowCount: _.random(2,3) });
    	},

		render: function() {
			return <TitledSlide title="Composing Components">
				<div className="kitties">
						<KittehGrid
							rows={this.state.rowCount}
							minKitty="2"
							maxKitty="5"
							width="780"
							height="400"
							minHeight="70"
							maxHeight="300"
							minInterval="3500"
							maxInterval="10000" /> 
						<button type="button" onClick={this.tryAgain}>MOAR KITTEHS</button>
				</div>
			</TitledSlide>;
		}
	});
    return Slide;
});