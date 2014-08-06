/** @jsx React.DOM */

var radGauge = $.fn.kendoRadialGauge;
$.fn.kendoRadialGauge = function() {
    console.log("Applying KendoUI RadialGauge Widget");
    radGauge.apply(this, arguments);
};

var slider = $.fn.kendoSlider;
$.fn.kendoSlider = function() {
    console.log("Applying KendoUI Slider Widget");
    slider.apply(this, arguments);
};

var Kendo = {};

Kendo.RadialGauge = React.createClass({

    getDefaultProps: function() {
        return {
            theme: "silver",
            minorUnit: 5,
            startAngle: -30,
            endAngle: 210,
            max: 180
        };
    },

    componentDidMount: function() {
        console.log("RadialGauge: Did Mount");
        var props = this.props;
        $(this.getDOMNode()).kendoRadialGauge({
            theme: props.theme,
            pointer: {
                value: props.value
            },    
            scale: {
                minorUnit: props.minorUnit,
                startAngle: props.startAngle,
                endAngle: props.endAngle,
                max: props.max
            }
        });
    },
    
    // shouldComponentUpdate: function(nextProps) {
    //     return nextProps.value !== this.props.value;
    // },
    
    componentDidUpdate: function() {
        console.log("RadialGauge: Did Update");
        $(this.getDOMNode()).data("kendoRadialGauge").value(this.props.value);
    },

    componentWillUnmount: function() {
        console.log("RadialGauge: Will Unmount");
    },

    render: function() {
        console.log("RadialGauge: Render");
        return <div className="gauge" />;
    }
});

Kendo.Slider = React.createClass({

    mixins: [React.postal],

    getDefaultProps: function() {
        return {
            min: 0,
            max: 180,
            showButtons: false
        };
    },

    componentDidMount: function() {
        console.log("Slider: Did Mount");
        var props = this.props;
        $(this.getDOMNode()).kendoSlider({
            min: props.min,
            max: props.max,
            showButtons: props.showButtons,
            value: this.props.value,
            change: this.handleChange
        });
    },
    
    componentWillUnmount: function() {
        console.log("Slider Will Unmount");
        $(this.getDOMNode()).data("kendoSlider").destroy();
    },
    
    handleChange: function(e) {
        this.publish("speed.change", { speed: e.value });
    },
    
    // shouldComponentUpdate: function(nextProps) {
    //     return nextProps.value !== this.props.value;
    // },

    render: function() {
        console.log("Slider: Render");
        return <div />
    }
});

var UnitOfMeasure = React.createClass({

    mixins: [React.postal],
    
    handleChange: function(e) {
        this.publish("uom.change", { uom: $(this.getDOMNode()).val() });
    },

    componentWillUnmount: function() {
        console.log("Unit Of Measure: Will Unmount");
    },
    
    render: function() {
        return <select className="uom-select" onChange={this.handleChange}>
            <option>MPH</option>
            <option>KPH</option>
        </select>;
    }
});

var SpeedDisplay = React.createClass({

    componentWillUnmount: function() {
        console.log("SpeedDisplay: Will Unmount");
    },

    render: function() {
        return <div className="speed-display">{ this.props.speed + " " + this.props.uom }</div>;
    }
});

var FormExample = React.createClass({

    mixins: [React.postal],
    
    getInitialState: function() {
        return {
            speed: 65,
            uom:"MPH"
        }
    },
    
    componentWillMount: function() {
        console.log("FormExample Will Unmount");
        this.subscribe("speed.change", function(d) {
            console.log(d);
            this.setState({ speed: d.speed });
        });
        this.subscribe("uom.change", function(d) {
            console.log(d);
            this.setState({ uom: d.uom });
        });
    },

    render: function() {
        console.log("Example: Render");
        return <div>
            <div className="container">
                <Kendo.RadialGauge value={this.state.speed} />
                <Kendo.Slider value={this.state.speed} id="gauge-slider" channel={this.props.channel} />
                <UnitOfMeasure channel={this.props.channel} />
            </div>
            <SpeedDisplay speed={this.state.speed} uom={this.state.uom} />
        </div>;
    }
});

$(document).ready(function () {
    React.renderComponent(
        <FormExample channel="kendo"/>,
        document.body
    );
});