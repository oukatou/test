import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { keyframes, cx, css } from 'emotion';

var _templateObject = _taggedTemplateLiteral(['\n                0% {top: 100px}\n                100% {top: 65px}\n                '], ['\n                0% {top: 100px}\n                100% {top: 65px}\n                ']),
    _templateObject2 = _taggedTemplateLiteral(['\n                0% {top: 65px}\n                100% {top: 100px}\n                '], ['\n                0% {top: 65px}\n                100% {top: 100px}\n                ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var closing = keyframes(_templateObject);
var opening = keyframes(_templateObject2);
function stylesheet(props) {
    var open = props.open;

    return {
        overlay: open ? {
            position: 'fixed',
            left: '0',
            right: '0',
            bottom: '0',
            top: '0',
            zIndex: 1040
        } : {},
        content: {
            borderRadius: '4px',
            backgroundColor: 'rgb(255,255,255)',
            opacity: open ? 1 : 0,
            width: '500px',
            '@media (max-width: 760px)': {
                width: '300px'
            },
            position: 'absolute',
            top: '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            margin: '0 auto',
            transition: 'opacity ease 0.3s',
            animation: open ? opening + ' 0.4s' : closing + ' 0.4s',
            outline: 0,
            boxShadow: '0 1px 9px rgba(0,0,0,.5)'
        },
        header: {
            borderBottom: '1px solid #ccc',
            padding: '10px',
            fontSize: '20px',
            fontWeight: '500',
            display: 'flex',
            justifyContent: 'space-between'
        },
        body: {
            padding: '20px',
            overflow: 'auto',
            maxHeight: '250px'
        },
        close: {
            cursor: 'pointer',
            fontWeight: '200',
            lineHeight: '17px',
            fontSize: '35px',
            color: 'rgba(0,0,0,0.45)',
            '&:hover': {
                color: 'rgba(0,0,0,0.85)'
            }
        },
        mask: {
            position: 'fixed',
            left: '0',
            right: '0',
            bottom: '0',
            top: '0',
            backgroundColor: 'rgba(0,0,0,0.4)',
            opacity: open ? 1 : 0,
            transition: 'all ease 0.2s',
            pointerEvents: open ? 'visible' : 'none',
            transitionDelay: open ? '0s' : '0.2s',
            zIndex: 1030
        }
    };
}

function customClassNames(cls, name) {
    return cls.split(' ').reduce(function (res, cur) {
        res && (res += ' ');
        return res + cur + '__' + name;
    }, '');
}

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalPresenter = function (_Component) {
    _inherits(ModalPresenter, _Component);

    function ModalPresenter() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ModalPresenter);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ModalPresenter.__proto__ || Object.getPrototypeOf(ModalPresenter)).call.apply(_ref, [this].concat(args))), _this), _this.onClose = _this.props.onClose, _this.handleOverlayClick = function (e) {
            if (e.target == e.currentTarget) {
                _this.onClose();
            }
        }, _this.handleKeyup = function (e) {
            if (_this.props.keyboard && e.keyCode == 27) {
                _this.onClose();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ModalPresenter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.body.addEventListener('keyup', this.handleKeyup);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.body.removeEventListener('keyup', this.handleKeyup);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                children = _props.children,
                className = _props.className,
                headerChildren = _props.headerChildren,
                onClose = _props.onClose,
                open = _props.open,
                backClosable = _props.backClosable;

            var overlayClassName = className && customClassNames(className, 'overlay');
            var contentClassName = className && customClassNames(className, 'content');
            var headerClassName = className && customClassNames(className, 'header');
            var closeClassName = className && customClassNames(className, 'close');
            var bodyClassName = className && customClassNames(className, 'body');
            var styles = stylesheet({ open: open });
            return React.createElement(
                'div',
                {
                    className: cx(css(styles.overlay), overlayClassName),
                    onClick: backClosable ? this.handleOverlayClick : null
                },
                React.createElement(
                    'article',
                    {
                        className: cx(css(styles.content), contentClassName) },
                    React.createElement(
                        'header',
                        {
                            className: cx(css(styles.header), headerClassName) },
                        headerChildren ? headerChildren : React.createElement(
                            'span',
                            null,
                            title
                        ),
                        React.createElement(
                            'span',
                            {
                                className: cx(css(styles.close), closeClassName),
                                onClick: onClose },
                            '\xD7'
                        )
                    ),
                    React.createElement(
                        'div',
                        {
                            className: cx(css(styles.body), bodyClassName) },
                        children
                    )
                )
            );
        }
    }]);

    return ModalPresenter;
}(Component);
ModalPresenter.__docgenInfo = {
    'description': '',
    'displayName': 'ModalPresenter'
};

function Modal(props) {
    var title = props.title,
        children = props.children,
        onClose = props.onClose,
        open = props.open,
        className = props.className,
        headerChildren = props.headerChildren,
        mask = props.mask,
        backClosable = props.backClosable,
        keyboard = props.keyboard;


    var maskClassName = className && customClassNames(className, 'mask');
    var styles = stylesheet({ open: open });

    return React.createElement(
        'div',
        { className: className },
        React.createElement(
            ModalPresenter,
            {
                className: className,
                title: title,
                onClose: onClose,
                open: open,
                headerChildren: headerChildren,
                backClosable: backClosable,
                keyboard: keyboard
            },
            children
        ),
        mask && React.createElement('div', { className: cx(css(styles.mask), maskClassName) })
    );
}

Modal.propTypes = {
    children: PropTypes.node,
    mask: PropTypes.bool,
    keyboard: PropTypes.bool,
    open: PropTypes.bool,
    backClosable: PropTypes.bool,
    onClose: PropTypes.func,
    title: PropTypes.string,
    className: PropTypes.string,
    headerChildren: PropTypes.node
};
Modal.defaultProps = {
    mask: true,
    keyboard: true,
    open: false,
    backClosable: true
};
Modal.__docgenInfo = {
    'description': '',
    'displayName': 'Modal',
    'props': {
        'children': {
            'type': {
                'name': 'node'
            },
            'required': false,
            'description': ''
        },
        'mask': {
            'type': {
                'name': 'bool'
            },
            'required': false,
            'description': '',
            'defaultValue': {
                'value': 'true',
                'computed': false
            }
        },
        'keyboard': {
            'type': {
                'name': 'bool'
            },
            'required': false,
            'description': '',
            'defaultValue': {
                'value': 'true',
                'computed': false
            }
        },
        'open': {
            'type': {
                'name': 'bool'
            },
            'required': false,
            'description': '',
            'defaultValue': {
                'value': 'false',
                'computed': false
            }
        },
        'backClosable': {
            'type': {
                'name': 'bool'
            },
            'required': false,
            'description': '',
            'defaultValue': {
                'value': 'true',
                'computed': false
            }
        },
        'onClose': {
            'type': {
                'name': 'func'
            },
            'required': false,
            'description': ''
        },
        'title': {
            'type': {
                'name': 'string'
            },
            'required': false,
            'description': ''
        },
        'className': {
            'type': {
                'name': 'string'
            },
            'required': false,
            'description': ''
        },
        'headerChildren': {
            'type': {
                'name': 'node'
            },
            'required': false,
            'description': ''
        }
    }
};

export default Modal;
