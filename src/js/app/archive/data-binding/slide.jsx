/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="binding" title="Data Sync - the 'new' Precision">
            	<h2 className="slide-headline-alt">Data Binding (most popular form)</h2>
            	<img className="slide-image" src={this.props.imageDir + "databinding.png"} />
				<div><aside>http://fluxxor.com/images/mvc-simple.png</aside></div>
                <ul className="top-breathing-room spacey-lines">
                    <li>Used to shorten the conceptual gap (between UI &amp; Model)</li>
                    <li>Often called Key/Value Observation (Observer Pattern)</li>
                    <li>Used (in some form) by Ember, Angular*, Knockout &amp; many others</li>
                </ul>
                <aside>(* Angular's approach with dirty-checking 'digest' cycles differs, for example, from direct change observation in KO.<br/>Both approaches still involve synchronizing state.)</aside>
            </TitledSlide>;
       }
    });
    return Slide;
});