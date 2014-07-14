/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="binding" title="Abstracting for Precision">
            	<h2 className="slide-headline-alt">Data Binding</h2>
            	<img className="slide-image" src={this.props.imageDir + "databinding.png"} />
				<div><aside>http://fluxxor.com/images/mvc-simple.png</aside></div>
                <ul className="top-breathing-room spacey-lines">
                    <li>Used to shorten the conceptual gap (between UI &amp; Model)</li>
                    <li>Often called Key/Value Observation (Observer Pattern)</li>
                    <li>Used by Ember, Angular, Knockout &amp; many others</li>
                </ul>
            </TitledSlide>;
       }
    });
    return Slide;
});