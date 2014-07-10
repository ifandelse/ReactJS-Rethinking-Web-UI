/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./placeKittenJsx"
], function(React, TitledSlide, md) {
    return React.createClass({
        getInitialState: function() {
            return {
                src: "js/app/slides/22/placeKitten2.png"
            };
        },

        robinSez: function() {
            this.setState({
                src: "js/app/slides/22/placeKitten2b.png"
            });
        },

        render: function() {
            return <TitledSlide classes="place-kitten-jsx" title="React Component – JSX">
                <img src={ this.state.src } onClick={ this.robinSez } />
            </TitledSlide>;
       }
    });
});