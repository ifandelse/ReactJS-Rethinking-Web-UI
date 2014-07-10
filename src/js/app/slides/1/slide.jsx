/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "css!./aboutme.css"
], function(React, TitledSlide) {
    return React.createClass({
        render: function() {
            return <TitledSlide classes="about-me" title="Who Am I?">
                <div><small>(Aside from all existential crises)</small></div>
                <div className="about-list">
                    <div>
                        <i className="fa fa-hand-o-right"></i><span>Jim Cowart</span>
                    </div>
                    <div>
                        <i className="fa fa-hand-o-right"></i><span>@ifandelse =></span>
                        <span>
                            <i className="social fa fa-github" />
                            <i className="social fa fa-twitter" />
                            <i className="social fa fa-instagram" />
                        </span>
                    </div>
                    <div>
                        <i className="fa fa-hand-o-right"></i>
                        <span>
                        @LeanKit
                        <img src="images/lk.png" className="img-rounded leankit" />
                        </span>
                    </div>
                </div>
                <div>
                    <img src="images/yes_we_kanban.png" />
                </div>
            </TitledSlide>;
       }
    });
});