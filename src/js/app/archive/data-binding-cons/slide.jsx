/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="cons" title="Cons">
                <ul className="spacey-lines slide-content-med-width">
                    <li>Tends towards cascading updates</li>
                    <li>Difficult to predict beyond simple scenarios</li>
                    <li>State is long lived (memory pressure)</li>
                    <li>Scattered state ownership makes it difficult to reason about</li>
                    <li>Hardens temporal coupling</li>
                </ul>
            </TitledSlide>;
       }
    });
    return Slide;
});