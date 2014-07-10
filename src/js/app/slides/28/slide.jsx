/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {

    return React.createClass({

        render: function() {
            var h1style = {
                fontSize: "270%",
                lineHeight: "250%"
            };
            var containerStyle = {
                marginTop: "10%",
                marginLeft: "5%"
            }

            return <TitledSlide classes="storytime" title="">
                    <div style={containerStyle}>
                        <h1 style={h1style}>Separate Your Concerns<br/>Via Components</h1>
                    </div>
            </TitledSlide>;
       }
    });
});