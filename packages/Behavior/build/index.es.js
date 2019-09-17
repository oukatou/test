import React, { Component } from 'react';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FocusBehavior = function (_Component) {
  _inherits(FocusBehavior, _Component);

  function FocusBehavior(props) {
    _classCallCheck(this, FocusBehavior);

    var _this = _possibleConstructorReturn(this, (FocusBehavior.__proto__ || Object.getPrototypeOf(FocusBehavior)).call(this, props));

    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);

    _this.state = {
      hasFocus: false
    };
    return _this;
  }

  _createClass(FocusBehavior, [{
    key: "handleFocus",
    value: function handleFocus(event) {
      if (this.props.onFocus) {
        this.props.onFocus(event);
      }

      if (!event.defaultPrevented) {
        this.setState({ hasFocus: true });
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      if (this.props.onBlur) {
        this.props.onBlur(event);
      }

      if (!event.defaultPrevented) {
        this.setState({ hasFocus: false });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children({
        hasFocus: this.state.hasFocus,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      });
    }
  }]);

  return FocusBehavior;
}(Component);
FocusBehavior.__docgenInfo = {
  "description": "",
  "displayName": "FocusBehavior"
};

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HoverBehavior = function (_Component) {
  _inherits$1(HoverBehavior, _Component);

  function HoverBehavior(props) {
    _classCallCheck$1(this, HoverBehavior);

    var _this = _possibleConstructorReturn$1(this, (HoverBehavior.__proto__ || Object.getPrototypeOf(HoverBehavior)).call(this, props));

    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);

    _this.state = {
      hasHover: false
    };
    return _this;
  }

  _createClass$1(HoverBehavior, [{
    key: "handleFocus",
    value: function handleFocus(event) {
      if (this.props.onMouseEnter) {
        this.props.onMouseEnter(event);
      }

      if (!event.defaultPrevented) {
        this.setState({ hasHover: true });
      }
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      if (this.props.onMouseLeave) {
        this.props.onMouseLeave(event);
      }

      if (!event.defaultPrevented) {
        this.setState({ hasHover: false });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children({
        hasHover: this.state.hasHover,
        onMouseEnter: this.handleFocus,
        onMouseLeave: this.handleBlur
      });
    }
  }]);

  return HoverBehavior;
}(Component);
HoverBehavior.__docgenInfo = {
  "description": "",
  "displayName": "HoverBehavior"
};

var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PressedBehavior = function (_Component) {
  _inherits$2(PressedBehavior, _Component);

  function PressedBehavior(props) {
    _classCallCheck$2(this, PressedBehavior);

    var _this = _possibleConstructorReturn$2(this, (PressedBehavior.__proto__ || Object.getPrototypeOf(PressedBehavior)).call(this, props));

    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);

    _this.state = {
      isPressed: false
    };
    return _this;
  }

  _createClass$2(PressedBehavior, [{
    key: "handleMouseDown",
    value: function handleMouseDown(event) {
      if (this.props.onMouseDown) {
        this.props.onMouseDown(event);
      }

      if (!event.defaultPrevented) {
        this.setState({ isPressed: true });
      }
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave(event) {
      if (this.props.onMouseLeave) {
        this.props.onMouseLeave(event);
      }

      if (!event.defaultPrevented) {
        this.setState({ isPressed: false });
      }
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(event) {
      if (this.props.onMouseUp) {
        this.props.onMouseUp(event);
      }

      if (!event.defaultPrevented) {
        this.setState({ isPressed: false });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children({
        isPressed: this.state.isPressed,
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onPressedMouseLeave: this.handleMouseLeave
      });
    }
  }]);

  return PressedBehavior;
}(Component);
PressedBehavior.__docgenInfo = {
  "description": "",
  "displayName": "PressedBehavior"
};

var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlBehavior = function (_Component) {
  _inherits$3(ControlBehavior, _Component);

  function ControlBehavior() {
    _classCallCheck$3(this, ControlBehavior);

    return _possibleConstructorReturn$3(this, (ControlBehavior.__proto__ || Object.getPrototypeOf(ControlBehavior)).apply(this, arguments));
  }

  _createClass$3(ControlBehavior, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        HoverBehavior,
        {
          onMouseEnter: this.props.onMouseEnter,
          onMouseLeave: this.props.onMouseLeave
        },
        function (_ref) {
          var hasHover = _ref.hasHover,
              onMouseEnter = _ref.onMouseEnter,
              onMouseLeave = _ref.onMouseLeave;
          return React.createElement(
            FocusBehavior,
            {
              onFocus: _this2.props.onFocus,
              onBlur: _this2.props.onBlur
            },
            function (_ref2) {
              var hasFocus = _ref2.hasFocus,
                  onFocus = _ref2.onFocus,
                  onBlur = _ref2.onBlur;
              return React.createElement(
                PressedBehavior,
                {
                  onMouseDown: _this2.props.onMouseDown,
                  onMouseUp: _this2.props.onMouseUp,
                  onMouseLeave: onMouseLeave
                },
                function (_ref3) {
                  var isPressed = _ref3.isPressed,
                      onMouseDown = _ref3.onMouseDown,
                      onMouseUp = _ref3.onMouseUp,
                      onPressedMouseLeave = _ref3.onPressedMouseLeave;
                  return _this2.props.children({
                    hasHover: hasHover,
                    hasFocus: hasFocus,
                    isPressed: isPressed,
                    onFocus: onFocus,
                    onBlur: onBlur,
                    onMouseDown: onMouseDown,
                    onMouseEnter: onMouseEnter,
                    onMouseLeave: onPressedMouseLeave,
                    onMouseUp: onMouseUp
                  });
                }
              );
            }
          );
        }
      );
    }
  }]);

  return ControlBehavior;
}(Component);
ControlBehavior.__docgenInfo = {
  "description": "",
  "displayName": "ControlBehavior"
};

export { ControlBehavior, FocusBehavior, HoverBehavior, PressedBehavior };
