/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide"
], function(React, TitledSlide) {
    var Slide = React.createClass({
        render: function() {
            return <TitledSlide title="Who Am I?">
                <div><aside>(Aside from all existential crises)</aside></div>
                <ul className="bulletless">
                    <li><i className="fa fa-hand-o-right"></i><span>Jim Cowart</span></li>
                    <li>
                        <i className="fa fa-hand-o-right"></i><span>@ifandelse =></span>
                        <span>
                            <i className="social fa fa-github" />
                            <i className="social fa fa-twitter" />
                            <i className="social fa fa-instagram" />
                        </span>
                    </li>
                    <li>
                        <i className="fa fa-hand-o-right"></i>
                        <span>
                        @LeanKit
                        <img src="images/lk.png" className="img-rounded img-tiny leankit" />
                        </span>
                    </li>
                    <li className="centered-bullets">
                        <img className="slide-image" src="images/yes_we_kanban.png" />
                    </li>
                </ul>
            </TitledSlide>;
       }
    });
    return Slide;
});