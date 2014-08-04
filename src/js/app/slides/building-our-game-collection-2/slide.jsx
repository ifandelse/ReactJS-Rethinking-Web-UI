/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {

    var Slide = React.createClass({

        render: function() {
            var h1style = {
                fontSize: "270%",
                lineHeight: "150%"
            };
            var containerStyle = {
                marginTop: "10%"
            }

            return <TitledSlide classes="storytime" title="">
                    <div style={containerStyle}>
                        <h1 style={h1style}>Let's Build a<br/>Game List Component</h1>
                        <h2>(With Navigation)</h2>
                    </div>
            </TitledSlide>;
       }
    });
    return Slide;
});