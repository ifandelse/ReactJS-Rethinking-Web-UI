/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./immediate-mode.css"
], function(React, TitledSlide, StepFsm) {        

    var Slide = React.createClass({
        render: function() {
            return <TitledSlide classes="immediate-mode" title="">
                  <blockquote>"...much of the complexity associated with the design and use of of traditional user interface systems is a direct result of the tendency of such systems to retain state." – Johannes Norneby</blockquote>
              </TitledSlide>;
       }
    });
    return Slide;
});
  