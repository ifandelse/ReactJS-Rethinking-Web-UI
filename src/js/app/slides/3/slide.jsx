/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./storytime"
], function(React, TitledSlide) {
    return React.createClass({
        render: function() {
            return <TitledSlide classes="storytime" title="Once Upon a Time">
                    <h2>These abstractions:</h2>
                    <div className="item">HTML (3/4)</div>
                    <div className="item">CSS (1/2)</div>
                    <div className="item">JavaScript (E262, ed.1)</div>
            </TitledSlide>;
       }
    });
});