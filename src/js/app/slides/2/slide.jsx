/** @jsx React.DOM */
define([
    "react",
    "css!./appeal1.css"
], function(React) {
    return React.createClass({
        render: function() {
            return <div className="appeal fill">
                <div>
                    <img src="images/Dijkstra.jpg" />
                    <div className="quote">
                        “The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise.”<br />– E Dijkstra
                    </div>
                </div>
            </div>;
       }
    });
});