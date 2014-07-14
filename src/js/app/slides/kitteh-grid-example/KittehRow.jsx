/** @jsx React.DOM */
define([
    "react",
    "jsx!./Kitteh",
    "postal",
    "react.animate"
], function(React, Kitteh, postal) {

	var channel = postal.channel("kitty");

  var KittehRow = React.createClass({
    
    mixins: [React.Animate],

  	getInitialState: function() {
  		return {
  			opacity: 1
  		};
  	},

  	updateRow: function() {
  		var self = this;
  		self.animate({
          opacity:0
        }, 100, function() {
        	setTimeout(function() {
        		self.animate({opacity: 1}, 500, "elastic");
        	},300);
      });
  		channel.publish("row.update", { rowId: self.props.key });
  	},

		render: function() {
      // if you must, you can do "inline" style with ReactJS
			var style = {
        opacity: this.state.opacity,
        maxWidth: this.props.maxWidth,
        margin: "0 auto 0 auto"
      };
			return <div onClick={this.updateRow} style={style} >
				{
					this.props.widths.map(function(i, idx){
						return <Kitteh key={idx}
                           height={this.props.height}
                           width={this.props.widths[idx]} />
					}.bind(this))
				}
			</div>;	
		}
	});
  return KittehRow;
});