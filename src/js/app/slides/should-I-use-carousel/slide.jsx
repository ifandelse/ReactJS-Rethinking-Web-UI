/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="dev-tools" title="Important Words from ShouldIUseACarousel.com">
                <img className="slide-image" src={this.props.imageDir + "siuac.png"} />
                <h2 className="slide-headline-alt">The only appropriate place to buck this rule is in a session demo. :-)</h2>
            </TitledSlide>;
       }
    });
    return Slide;
});