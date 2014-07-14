/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
    	getInitialState: function() {
    		return {
    			imgSrc: this.props.imageDir + "clientstate1.jpg"
    		};
    	},

        render: function() {
        	var self = this;
        	setTimeout(function() {
        		self.setState({ imgSrc: self.props.imageDir + "/clientstate2.jpg" });
        	}, 3000);
            return <TitledSlide classes="storytime" title="The State We're In">
                    <img className="slide-image slide-image-fill" src={this.state.imgSrc} />
            </TitledSlide>;
       }
    });

    return Slide;
});