/** @jsx React.DOM */
define([
    "react",
    "jsx!./KittehGrid",
    "lodash",
    "css!./kitties"
], function(React, KittehGrid, _) {

    return React.createClass({

    	getInitialState: function() {
    		return {
    			rows: 3
    		}
    	},

    	tryAgain: function() {
    		this.setState({ rows: _.random(2,3) });
    	},

		render: function() {
			return <div className="kitties">
					<h2>Composing Components</h2>
					<KittehGrid
						rows={this.state.rows}
						minKitty="2"
						maxKitty="5"
						width="800"
						height="400"
						minHeight="70"
						maxHeight="300"
						minInterval="3500"
						maxInterval="10000" /> 
					<button type="button" onClick={this.tryAgain}>MOAR KITTEHS</button>
			</div>;
		}
	});
});