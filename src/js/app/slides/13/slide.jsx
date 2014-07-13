/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide title="Data Binding Behaving Badly">
                <img className="slide-image" src="js/app/slides/13/complex.png" />
                <div><aside>http://fluxxor.com/images/mvc-complex.png</aside></div>
            </TitledSlide>;
       }
    });
    return Slide;
});