/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./lifecycle1.css"
], function(React, TitledSlide, md) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="lifecycle1" title="Component Lifecycle Methods">
                <ul>
                    <li><code>componentWillMount</code> – &gt; Invoked once, immediately before render.</li>
                    <li><code>componentDidMount</code> – &gt; Invoked immediately after rendering occurs. You could integrate jQuery plugins or other libraries here, if needed.</li>
                </ul>
                <img className="top-breathing-room slide-image" src={this.props.imageDir + "willmount.png"} />
            </TitledSlide>;
       }
    });
    return Slide;
});