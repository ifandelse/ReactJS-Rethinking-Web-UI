/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="storytime" title="">
                <div className="">
                    <img className="slide-image appeal-img" src={this.props.imageDir + "docbrown.jpg"} />  
                </div> 
                <div className="bd">
                    You rendered all the games to the DOM<br/>when you didn't need to?!
                </div> 
            </TitledSlide>;
       }
    });
    return Slide;
});