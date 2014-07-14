define([
    "react"
], function(React) {

    var Overlay = React.createClass({
        getDefaultProps: function() {
            return {
                src: this.props.imageDir + "loadingGif.gif"
            };
        },

        render: function() {
            return <div className="overlay">
                <img className="indicator" width="100" src={ this.props.src } />
            </div>;
        }
    });

    return Overlay;

});