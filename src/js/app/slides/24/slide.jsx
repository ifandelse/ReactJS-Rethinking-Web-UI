/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./jsxReaction"
], function(React, TitledSlide) {
    return React.createClass({
        render: function() {
            return <TitledSlide classes="jsx-reaction" title="If You're Like Me">
            		<h2>This was your initial reaction to seeing JSX</h2>
                    <img src="js/app/slides/24/impliedfacepalm.jpg" />
            </TitledSlide>;
       }
    });
});