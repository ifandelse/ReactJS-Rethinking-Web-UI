/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./twostates"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="twostates" title="">
                <div>
                    <div className="quote">
                        “Two states diverged in a UI, and I...<br/>I just re-rendered everything.”
                        <aside>– Me (as Frost rolls over in his grave)</aside>
                    </div>
                </div>
                <div>
                    <h2>(Or, in other words, welcome to ReactJS)</h2>
                </div>
            </TitledSlide>;
       }
    });
    return Slide;
});