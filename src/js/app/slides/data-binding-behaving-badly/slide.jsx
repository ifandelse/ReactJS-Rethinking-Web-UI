/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide title="It Usually Ends Up Here">
                <img className="slide-image" src={this.props.imageDir + "complex.png"} />
                <div><aside>http://fluxxor.com/images/mvc-complex.png</aside></div>
            </TitledSlide>;
       }
    });
    return Slide;
});