/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="pros" title="Pros">
                <ul className="spacey-lines slide-content-sm-width">
                    <li><em>Partially</em> shortens conceptual gap between static &amp; dynamic</li>
                    <li>It's a well-recognized pattern</li>
                    <li>Can eliminate boilerplate*</li>
                </ul>
            </TitledSlide>;
       }
    });
    return Slide;
});