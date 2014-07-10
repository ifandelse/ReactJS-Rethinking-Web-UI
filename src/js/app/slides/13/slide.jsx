/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./behaving-badly"
], function(React, TitledSlide, md) {
    return React.createClass({
        render: function() {
            return <TitledSlide classes="behaving-badly" title="Data Binding Behaving Badly">
                <img src="js/app/slides/13/complex.png" />
                <div><cite>http://fluxxor.com/images/mvc-complex.png</cite></div>
            </TitledSlide>;
       }
    });
});