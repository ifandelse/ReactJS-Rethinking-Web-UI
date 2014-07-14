/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./appeal1.css"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="appeal1">
                <div className="media">
                    <img className="slide-image appeal-img" src={this.props.imageDir + "Dijkstra.jpg"} />  
                    <div className="bd quote quote-dijkstra">
                        “The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise.” – Dijkstra
                    </div>
                </div>
            </TitledSlide>;
       }
    });
    return Slide;
});