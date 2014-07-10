/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./twostates"
], function(React, TitledSlide) {
    return React.createClass({
        render: function() {
            return <TitledSlide classes="twostates" title="">
                <div>
                    <div className="quote">
                        “Two states diverged in a UI, and I...<br/>I just re-rendered everything.”
                        <div className="cite">– Me (as Frost rolls over in his grave)</div>
                    </div>
                </div>
                <div>
                    <h2>(Or, in other words, welcome to ReactJS)</h2>
                </div>
            </TitledSlide>;
       }
    });
});