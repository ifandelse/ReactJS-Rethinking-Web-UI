define(
  ["./react-es6","./react-es6/lib/cx","./BootstrapMixin","./DropdownStateMixin","./Button","./ButtonGroup","./DropdownMenu","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __exports__) {
    "use strict";
    /** @jsx React.DOM */

    var React = __dependency1__["default"];
    var classSet = __dependency2__["default"];
    var BootstrapMixin = __dependency3__["default"];
    var DropdownStateMixin = __dependency4__["default"];
    var Button = __dependency5__["default"];
    var ButtonGroup = __dependency6__["default"];
    var DropdownMenu = __dependency7__["default"];

    var SplitButton = React.createClass({displayName: 'SplitButton',
      mixins: [BootstrapMixin, DropdownStateMixin],

      propTypes: {
        pullRight:     React.PropTypes.bool,
        title:         React.PropTypes.renderable,
        href:          React.PropTypes.string,
        dropdownTitle: React.PropTypes.renderable,
        onClick:       React.PropTypes.func,
        onSelect:      React.PropTypes.func
      },

      getDefaultProps: function () {
        return {
          dropdownTitle: 'Toggle dropdown'
        };
      },

      render: function () {
        var groupClasses = {
            'open': this.state.open,
            'dropup': this.props.dropup
          };

        return (
          ButtonGroup(
            {bsSize:this.props.bsSize,
            className:classSet(groupClasses),
            id:this.props.id}, 
            Button(
              {ref:"button",
              href:this.props.href,
              bsStyle:this.props.bsStyle,
              onClick:this.handleButtonClick}, 
              this.props.title
            ),

            Button(
              {ref:"dropdownButton",
              bsStyle:this.props.bsStyle,
              className:"dropdown-toggle",
              onClick:this.handleDropdownClick}, 
              React.DOM.span( {className:"sr-only"}, this.props.dropdownTitle),
              React.DOM.span( {className:"caret"} )
            ),

            DropdownMenu(
              {ref:"menu",
              onSelect:this.handleOptionSelect,
              'aria-labelledby':this.props.id,
              pullRight:this.props.pullRight}, 
              this.props.children
            )
          )
        );
      },

      handleButtonClick: function (e) {
        if (this.state.open) {
          this.setDropdownState(false);
        }

        if (this.props.onClick) {
          this.props.onClick(e);
        }
      },

      handleDropdownClick: function (e) {
        e.preventDefault();

        this.setDropdownState(!this.state.open);
      },

      handleOptionSelect: function (key) {
        if (this.props.onSelect) {
          this.props.onSelect(key);
        }

        this.setDropdownState(false);
      }
    });

    __exports__["default"] = SplitButton;
  });