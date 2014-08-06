/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="binding" title="Data Synchronization">
            	<h2 className="slide-headline-alt top-breathing-room">Data Binding (most popular form)</h2>
            	<p>
                <img className="slide-image top-breathing-room" src={this.props.imageDir + "databinding.png"} />
				<div><aside>http://fluxxor.com/images/mvc-simple.png</aside></div>
                </p>
                <div className="slide-content-med-width">Used (in some form) by Ember, Angular*, Knockout &amp; many others</div>
                <aside>(* Angular's approach with dirty-checking 'digest' cycles differs, for example, from direct change observation in KO.<br/>Both approaches still involve synchronizing state.)</aside>
            </TitledSlide>;
       }
    });
    return Slide;
});