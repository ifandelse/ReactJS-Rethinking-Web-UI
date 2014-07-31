/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="binding" title="In other words...">
                <div class="slide-children" data-reactid=".0.2">
                    <p className="slide-content-med-width slide-content-alt slide-content-sm">...<em >we don't do so well when it comes to reasoning about state changing our UI over time.</em></p>
                    <ul className="spacey-lines top-breathing-room">
                        <li>Mutating (&amp; long-lived) State makes building UIs difficult*</li>
                        <li>It becomes more difficult the more state &amp; time increases</li>
                        <li>Things were much simpler when we refreshed entire pages</li>
                    </ul>
                </div>
            </TitledSlide>;
       }
    });

    return Slide;
});