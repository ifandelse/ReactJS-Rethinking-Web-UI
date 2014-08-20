/** @jsx React.DOM */
define([
    "react",
    "jsx!titledslide",
    "postal.react",
    "jquery",
    "kendo",
    "css!./integrating-ui-plugin.css"
], function(React, TitledSlide, postalReact, $) {
    
  var Kendo = {};

  Kendo.RadialGauge = React.createClass({
    getDefaultProps: function() {
      return {
        theme: "silver",
        minorUnit: 5,
        startAngle: -30,
        endAngle: 210,
        max: 180
      }
    },
    componentDidMount: function() {
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
    componentWillReceiveProps: function(nextProps) {
      if(nextProps.value !== this.props.value) {
        $(this.getDOMNode())
        	.data("kendoRadialGauge")
        	.value(nextProps.value);            
      }
    },
    render: function() {
      return <div className="gauge" />;
    }
  });

  Kendo.Slider = React.createClass({
    mixins: [postalReact],
    getDefaultProps: function() {
      return {
        min: 0,
        max: 180,
        showButtons: false
      }
    },
    componentDidMount: function() {
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
      $(this.getDOMNode()).data("kendoSlider").destroy();
    },
    handleChange: function(e) {
      this.publish("change.speed", { speed: e.value });
    },
    render: function() {
      return <div />
    }
  });

  var UnitOfMeasure = React.createClass({
    mixins: [postalReact],
    handleChange: function(e) {
      this.publish("change.uom", { uom: $(this.getDOMNode()).val() });
    },
    render: function() {
      return <select className="uom-select" onChange={this.handleChange}>
        <option>MPH</option>
        <option>KPH</option>
      </select>;
    }
  });

  var SpeedDisplay = React.createClass({    
    render: function() {
      return <div className="speed-display">{ this.props.speed + " " + this.props.uom }</div>;
    }
  });

  var FormExample = React.createClass({
    mixins: [postalReact],
    getInitialState: function() {
      return {
        speed: 88,
        uom:"MPH"
      }
    },
    componentWillMount: function() {
      this.subscribe("change.#", function(data) {
          this.setState(data);
      });
    },        
    componentWillUnmount: function() {
      this.disposeSubscriptions();
    },
    render: function() {
      return <div>
        <div className="container">
          <Kendo.RadialGauge value={this.state.speed} />
          <Kendo.Slider value={this.state.speed} channel={this.props.channel} />
          <UnitOfMeasure channel={this.props.channel} />
        </div>
        <SpeedDisplay speed={this.state.speed} uom={this.state.uom} />
      </div>;
    }
  });

  var Slide = React.createClass({
    render: function() {
      return <TitledSlide classes="integrating-ui-plugin">
          <h2 className="">Integrating in <span className="slide-content-alt">`componentDidMount`</span></h2>
          <FormExample channel="kendo"/>
      </TitledSlide>;
   }
  });
  return Slide;
});