/** @jsx React.DOM */
define([
  "react",
  "jsx!./KittehRow",
  "lodash",
  "postal",
  "./stateGenerator",
], function(React, KittehRow, _, postal, stateGenerator) {

	var channel = postal.channel("kitty");

  var KittehGrid = React.createClass({

  	componentWillMount: function() {
  		this.updateWithGeneratedState();
  		this.subscription = channel.subscribe("row.update", function(data){
  			var rowState = this.state.rows;
  			rowState[data.rowId] = stateGenerator.generateRowState(this.props);
  			this.setState({ rows: rowState });
  		}).withContext(this);
  	},

  	componentWillUnmount: function() {
  		this.subscription.unsubscribe();
  	},

  	componentWillReceiveProps: function() {
  		this.updateWithGeneratedState();
  	},

  	updateWithGeneratedState: function() {
  		this.setState({
  			rows: stateGenerator.generateWidths(this.props),
  			heights: stateGenerator.generateHeights(this.props)
  		});
  	},

		render: function() {
			return <div className="kitty-grid">
				{
					this.state.rows.map(function(widths, idx){
						var height = this.state.heights[idx];
						return <KittehRow
    									key={ idx }
    									widths={ widths }
    									height={ height }
    									maxWidth={ this.props.width + 20 }
    							 />
					}.bind(this))
				}
			</div>;	
		}
	});
  return KittehGrid;
});