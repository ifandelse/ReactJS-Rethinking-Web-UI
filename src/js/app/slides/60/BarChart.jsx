/** @jsx React.DOM */
define([
    "react",
    "jsx!./DataSeries",
    "lodash",
    "react.animate"
], function(React, DataSeries, _) {

	var states = [
		[ 30, 10,  5,  8, 15, 10 ],
		[ 60, 46, 25, 47, 31,  7 ],
		[  5, 54, 63, 17,  2, 27 ],
		[ 15,  7, 35, 26, 44, 80 ]
	];
	var stIdx = 0;

	var BarChart = React.createClass({
    
    	mixins: [React.Animate],

		getInitialState: function() {
			return {
				data: states[0],
				palette: ["#34347A", "#A73643", "#449230", "#FFDF80"]
			};
		},

		randomizeState: function() {
			var self = this;
			if(stIdx < states.length - 1) {
				stIdx += 1;
			} else {
				stIdx = 0;
			}
			self.animate({
				data: states[stIdx]
			}, 600, self.props.transition);	
			console.log(self.props.transition);
		},

		componentWillUnmount: function(){
			clearTimeout(this.timer);
		},

		componentWillReceiveProps: function() {
			this.randomizeState();
		},

		render: function() {
			return (
			  <svg className="chart" width={this.props.width} height={this.props.height} onClick={this.randomizeState}>
			    <DataSeries 
			    	data={this.state.data}
			    	width={this.props.width}
			    	height={this.props.height}
			    	colors={this.state.palette} />
			  </svg>
			);
		}
	});

	return BarChart;
});