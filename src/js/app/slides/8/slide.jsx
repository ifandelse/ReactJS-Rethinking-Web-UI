/** @jsx React.DOM */
define([
    "react",
    "css!./appeal2"
], function(React) {
    return React.createClass({
        render: function() {
            return <div className="appeal2 fill">
                <div>
                    <div className="quote">
                        “Our intellectual powers are rather geared to master static relations
                        and our powers to visualize processes evolving in time are relatively
                        poorly developed. For that reason we should do (as wise programmers aware
                        of our limitations) our utmost to <em>shorten the conceptual gap between the
                        static program and the dynamic process</em>, to make the correspondence between
                        the program (spread out in text space) and the process (spread out in time)
                        as trivial as possible” - Dijkstra.
                    </div>
                </div>
            </div>;
       }
    });
});