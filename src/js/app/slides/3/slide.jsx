/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="" title="Once Upon a Time">
                    <h2 className="top-breathing-room slide-headline-alt">These abstractions:</h2>
                    <ul className="bulletless spacey-lines centered-bullets">
                        <li className="item">HTML (3/4)</li>
                        <li className="item">CSS (1/2)</li>
                        <li className="item">JavaScript (E262, ed.1)</li>
                    </ul>
            </TitledSlide>;
       }
    });
    return Slide;
});