/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "jsx!./BarChart",
    "css!./svg"
], function(React, TitledSlide, BarChart) {

    var transTypes = ["linear" ,"quad" ,"cubic" ,"sin" ,"exp" ,"circle" ,"elastic" ,"back" ,"bounce"];

    var Slide = React.createClass({
        getInitialState: function() {
            return {
                transition: "back"
            };
        },

        changeTransition: function() {
            var el = this.refs.transition.getDOMNode();
            this.setState({ transition: el.options[el.selectedIndex].text })
        },

        render: function() {
            return <TitledSlide classes="svg" title="Btw, SVG + ReactJS!">
            	<div>
                    <span>Transition Type:&nbsp;</span>
                    <select ref="transition" onChange={ this.changeTransition }>
                        {
                            transTypes.map(function(t){
                                if(t === this.state.transition) {
                                    return <option selected={true}>{t}</option>
                                } else {
                                    return <option>{t}</option>
                                }
                            }.bind(this))
                        }
                    </select>
                </div>
                <BarChart width={600} height={300} transition={ this.state.transition } />
            </TitledSlide>;
       }
    });
    return Slide;
});