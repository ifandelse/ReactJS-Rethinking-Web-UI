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


    var DropdownButton = React.createClass({displayName: 'DropdownButton',
      mixins: [BootstrapMixin, DropdownStateMixin],

      propTypes: {
        pullRight:    React.PropTypes.bool,
        title:    React.PropTypes.renderable,
        href:     React.PropTypes.string,
        onClick:  React.PropTypes.func,
        onSelect: React.PropTypes.func,
        navItem:  React.PropTypes.bool
      },

      render: function () {
        var className = this.props.className ?
          this.props.className + ' dropdown-toggle' : 'dropdown-toggle';

        var renderMethod = this.props.navItem ?
          'renderNavItem' : 'renderButtonGroup';

        return this[renderMethod]([
          Button(
            {ref:"dropdownButton",
            href:this.props.href,
            bsStyle:this.props.bsStyle,
            className:className,
            onClick:this.handleDropdownClick,
            id:this.props.id,
            key:0,
            navDropdown:this.props.navItem}, 
            this.props.title,' ',
            React.DOM.span( {className:"caret"} )
          ),
          DropdownMenu(
            {ref:"menu",
            'aria-labelledby':this.props.id,
            onSelect:this.handleOptionSelect,
            pullRight:this.props.pullRight,
            key:1}, 
            this.props.children
          )
        ]);
      },

      renderButtonGroup: function (children) {
        var groupClasses = {
            'open': this.state.open,
            'dropup': this.props.dropup
          };

        return (
          ButtonGroup(
            {bsSize:this.props.bsSize,
            className:classSet(groupClasses)}, 
            children
          )
        );
      },

      renderNavItem: function (children) {
        var classes = {
            'dropdown': true,
            'open': this.state.open,
            'dropup': this.props.dropup
          };

        return (
          React.DOM.li( {className:classSet(classes)}, 
            children
          )
        );
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

    __exports__["default"] = DropdownButton;
  });