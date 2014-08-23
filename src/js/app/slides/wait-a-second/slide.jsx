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
                <h2 className="slide-headline">
                    You rendered all the games to the DOM when you didn't need to?!
                </h2> 
            </TitledSlide>;
       }
    });
    return Slide;
});