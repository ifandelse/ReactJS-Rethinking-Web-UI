/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="jsx-reaction" title="If You're Like Me">
            		<h2 className="slide-headline-alt">This was your initial reaction to seeing JSX</h2>
                    <img className="slide-image" src={this.props.imageDir + "impliedfacepalm.jpg"} />
            </TitledSlide>;
       }
    });
    return Slide;
});