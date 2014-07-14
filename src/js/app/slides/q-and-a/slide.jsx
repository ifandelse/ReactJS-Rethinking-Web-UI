/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./q-and-a"
], function(React, TitledSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="q-and-a" title="Q &amp; A">
                <img className="slide-image" src={this.props.imageDir + "PussInBoots1.gif"} />
                <h2>Clone the Repo for this Presentation:</h2>
                <div><a href="https://github.com/ifandelse/ReactJS-Rethinking-Web-UI">https://github.com/ifandelse/ReactJS-Rethinking-Web-UI</a></div>
            </TitledSlide>;
       }
    });
    return Slide;
});