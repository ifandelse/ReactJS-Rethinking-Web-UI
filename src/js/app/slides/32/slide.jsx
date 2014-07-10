/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./kittehRow"
], function(React, TitledSlide) {
    return React.createClass({
        render: function() {
            return <TitledSlide classes="kitteh-row" title="KittehRow">
                <div className="scroller">
            	   <img src="js/app/slides/32/KittehRow.png" />
                </div>
            </TitledSlide>;
       }
    });
});