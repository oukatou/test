'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var emotion = require('emotion');
var ControlBehavior = _interopDefault(require('whd-behavior/ControlBehavior'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function stylesheet(props) {
    return _extends({
        height: '20px',
        lineHeight: '30px',
        padding: '3px',
        margin: '0 10px',
        border: '1px solid rgba(128,128,128,0.2)',
        borderRadius: '1px',
        fontSize: '1em',
        outline: 'none',
        appearance: 'none'
    }, props.hasHover ? {
        boxShadow: '0 0 2px #afce31'
    } : {}, props.hasFocus ? {
        boxShadow: '0 0 0 1px #94b317'
    } : {});
}

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Input = function Input(props, ref) {
    var placeholder = props.placeholder,
        onChange = props.onChange,
        value = props.value,
        otherProps = _objectWithoutProperties(props, ['placeholder', 'onChange', 'value']);

    return React__default.createElement(
        ControlBehavior,
        null,
        function (_ref) {
            var hasHover = _ref.hasHover,
                hasFocus = _ref.hasFocus,
                onFocus = _ref.onFocus,
                onBlur = _ref.onBlur,
                onMouseEnter = _ref.onMouseEnter,
                onMouseLeave = _ref.onMouseLeave;
            return React__default.createElement('input', _extends$1({ onFocus: onFocus,
                onBlur: onBlur,
                onMouseLeave: onMouseLeave,
                onMouseEnter: onMouseEnter,
                onChange: onChange,
                className: emotion.css(stylesheet({ hasFocus: hasFocus, hasHover: hasHover })),
                type: 'text',
                value: value,
                placeholder: placeholder,
                ref: ref
            }, otherProps));
        }
    );
};

var Input$1 = React.forwardRef(Input);
Input.__docgenInfo = {
    'description': '',
    'displayName': 'Input'
};

exports.default = Input$1;
