/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./warmFuzzy"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="warm-fuzzy" title="But Now...Warm Fuzzies">
                <div className="media top-breathing-room">
                    <img className="slide-image" src={this.props.imageDir + "warmfuzzy.jpg"} />
                    <div className="bd">
                        <ul>
                            <li>Familiar Markup Paradigm</li>
                            <li>Powerful JavaScript support</li>
                            <li>Separation of Technology vs Concerns</li>
                        </ul>
                    </div>
                </div>
            </TitledSlide>;
       }
    });
    return Slide;
});