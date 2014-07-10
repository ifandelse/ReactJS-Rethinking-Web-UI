/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "underscore"
], function(React, TitledSlide, _) {

    return React.createClass({
        getInitialState: function(){
            var imgStyle = {
                maxHeight: "100px",
                verticalAlign: "middle"
            }
            return {
                descriptions: [
                    "Enemy",
                    <img style={imgStyle} src="images/enemy1.jpg" />,
                    <img style={imgStyle} src="images/enemy2.jpg" />,
                    <img style={imgStyle} src="images/enemy3.png" />,
                    <img style={imgStyle} src="images/enemy4.jpg" />,
                    <img style={imgStyle} src="images/enemy5.jpg" />,
                    "Enemy",
                    <img style={imgStyle} src="images/enemy6.jpg" />,
                    <img style={imgStyle} src="images/enemy7.jpg" />,
                    <img style={imgStyle} src="images/enemy8.jpg" />,
                    <img style={imgStyle} src="images/enemy9.jpg" />,
                    <img style={imgStyle} src="images/enemy10.jpg" />,
                    <img style={imgStyle} src="images/enemy11.jpg" />,
                    <img style={imgStyle} src="images/enemy12.jpg" />,
                    <img style={imgStyle} src="images/enemy13.jpg" />,
                    "Enemy",
                    <img style={imgStyle} src="images/enemy14.jpg" />,
                    <img style={imgStyle} src="images/enemy15.jpg" />,
                    <img style={imgStyle} src="images/enemy16.jpg" />,
                    <img style={imgStyle} src="images/Crying Emote.png" />,
                    <img style={imgStyle} src="images/enemy10.jpg" />,
                    <img style={imgStyle} src="images/enemy12.jpg" />,
                    <img style={imgStyle} src="images/enemy14.jpg" />,
                    <img style={imgStyle} src="images/enemy8.jpg" />,
                    <img style={imgStyle} src="images/enemy16.jpg" />,
                    "Enemy",
                    <img style={imgStyle} src="images/enemy6.jpg" />,
                    <img style={imgStyle} src="images/enemy4.jpg" />,
                    <img style={imgStyle} src="images/enemy2.jpg" />,
                    <img style={imgStyle} src="images/enemy1.jpg" />,
                    <img style={imgStyle} src="images/enemy3.png" />,
                    <img style={imgStyle} src="images/enemy15.jpg" />,
                    "Enemy",
                    <img style={imgStyle} src="images/enemy5.jpg" />,
                    <img style={imgStyle} src="images/enemy7.jpg" />,
                    <img style={imgStyle} src="images/enemy9.jpg" />,
                    <img style={imgStyle} src="images/enemy11.jpg" />,
                    <img style={imgStyle} src="images/enemy13.jpg" />,
                    <img style={imgStyle} src="images/repdem.png" />,
                    "Enemy"
                ],
                descriptionIndex: 0
            };
        },

        cycleDescription: function() {
            if(this.isMounted()) {
                var newIdx = (this.state.descriptionIndex < this.state.descriptions.length - 1) ? this.state.descriptionIndex + 1 : 0;
                this.setState({
                    descriptionIndex: newIdx
                });
            }
        },

        getInterval: function() {
            var ms;
            var desc = this.state.descriptions[this.state.descriptionIndex];
            if(desc === "Enemy") {
                ms = _.random(800, 2000);              
            } else {
                ms = _.random(50, 500);
            }
            return ms;
        },

        componentWillUnmount: function() {
            clearTimeout(this.timeout);
        },

        render: function() {
            var h1style = {
                fontSize: "270%",
                lineHeight: "250%"
            };
            var descStyle = {
                fontSize: "270%",
                textShadow: "10px 1px 20px #AC9C9C"
            }
            var containerStyle = {
                marginTop: "10%",
                marginLeft: "5%"
            }
            var self = this;
            self.timeout = setTimeout(function() {
                self.cycleDescription();
            }, self.getInterval());

            return <TitledSlide classes="storytime" title="">
                    <div style={containerStyle}>
                        <h1 style={h1style}>State Is The</h1>
                        <div style={descStyle}>
                            {this.state.descriptions[this.state.descriptionIndex]}
                        </div>
                    </div>
            </TitledSlide>;
       }
    });
});