/** @jsx React.DOM */
define([
    "react",
    "jsx!./Bar",
    "d3"
], function(React, Bar, d3) {
	var DataSeries = React.createClass({
	  getDefaultProps: function() {
	    return {
	      title: '',
	      data: []
	    }
	  },

	  render: function() {
	    var props = this.props;
	    var colorIdx = 0;
	    var nextColor = function(idx) {
		  	if(colorIdx >= this.props.colors.length) {
		  		colorIdx = 0;
		  	} else {
		  		colorIdx += 1;
		  	}
		  	return this.props.colors[colorIdx];
		}.bind(this);

	    var yScale = d3.scale.linear()
	      .domain([0, d3.max(this.props.data)])
	      .range([0, this.props.height]);

	    var xScale = d3.scale.ordinal()
	      .domain(d3.range(this.props.data.length))
	      .rangeRoundBands([0, this.props.width], 0.05);

	    var bars = _.map(this.props.data, function(point, i) {
	      return (
	        <Bar
	        	height={yScale(point)} 
	        	width={xScale.rangeBand()} 
	        	offset={xScale(i)} 
	        	availableHeight={props.height} 
	        	color={nextColor()} 
	        	key={i} />
	      )
	    });

	    return (
	      <g>{bars}</g>
	    );
	  }
	});
	return DataSeries;
});