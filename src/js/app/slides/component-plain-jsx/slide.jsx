/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        getInitialState: function() {
            return {
                src: this.props.imageDir + "placeKitten2.png"
            };
        },

        robinSez: function() {
            this.setState({
                src: this.props.imageDir + "placeKitten2b.png"
            });
        },

        render: function() {
            return <TitledSlide classes="place-kitten-jsx" title="React Component – JSX">
                <img className="slide-image slide-image-fill" src={ this.state.src } onClick={ this.robinSez } />
            </TitledSlide>;
       }
    });
    return Slide;
});