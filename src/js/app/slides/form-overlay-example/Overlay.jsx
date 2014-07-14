define([
    "react"
], function(React) {

    var Overlay = React.createClass({
        getDefaultProps: function() {
            return {
                src: "js/app/slides/35/loadingGif.gif"
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