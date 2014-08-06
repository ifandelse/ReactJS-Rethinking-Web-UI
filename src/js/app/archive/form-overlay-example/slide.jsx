/** @jsx React.DOM */
define([
    "react",
    "jsx!./SmartForm",
    "./fakeDataSrc",
    "css!./form-example"
], function(React, SmartForm, fakeDataSrc) {
    var Slide = React.createClass({

        render: function() {
            return <div className="form-example">
                <h2 className="slide-title">Form + Overlay Example</h2>
                {this.transferPropsTo(<SmartForm channel="form-example"/>)}
            </div>;
        }
    });
    return Slide;
});