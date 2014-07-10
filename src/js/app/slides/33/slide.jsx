/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./kittehGrid"
], function(React, TitledSlide) {
    return React.createClass({
        render: function() {
            return <TitledSlide classes="kitteh-grid" title="KittehGrid">
                <div className="scroller">
            	   <img src="js/app/slides/33/KittehGrid.png" />
                </div>
            </TitledSlide>;
       }
    });
});