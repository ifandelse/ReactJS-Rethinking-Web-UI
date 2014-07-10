/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./warmFuzzy.css"
], function(React, TitledSlide) {
    return React.createClass({
        render: function() {
            return <TitledSlide classes="warm-fuzzy" title="But Now...Warm Fuzzies">
                <div className="content">
                    <img src="js/app/slides/25/warmfuzzy.jpg" />
                    <div className="list">
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
});