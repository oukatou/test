import React, { Component } from 'react';
import { keyframes, cx, css } from 'emotion';

var _templateObject = _taggedTemplateLiteral(['\n                0% {top: 180px}\n                100% {top: 155px}\n                '], ['\n                0% {top: 180px}\n                100% {top: 155px}\n                ']),
    _templateObject2 = _taggedTemplateLiteral(['\n                0% {top: 155px}\n                100% {top: 180px}\n                '], ['\n                0% {top: 155px}\n                100% {top: 180px}\n                ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var closing = keyframes(_templateObject);
var opening = keyframes(_templateObject2);
function stylesheet(props) {
    var open = props.open,
        mask = props.mask;

    return {
        overlay: mask ? {
            position: 'fixed',
            left: '0',
            right: '0',
            bottom: '0',
            top: '0',
            backgroundColor: 'rgba(0,0,0,0.4)',
            opacity: open ? 1 : 0,
            transition: 'all ease 0.2s',
            pointerEvents: open ? 'visible' : 'none',
            transitionDelay: open ? '0s' : '0.3s',
            zIndex: 1000
        } : {},
        content: {
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: 'rgb(255,255,255)',
            opacity: open ? 1 : 0,
            width: '500px',
            '@media (max-width: 760px)': {
                width: '300px'
            },
            position: 'absolute',
            left: '50%',
            top: '180px',
            transform: 'translateX(-50%)',
            transition: 'opacity ease 0.4s',
            animation: open ? opening + ' 0.4s' : closing + ' 0.4s',
            outline: 0
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
            fontSize: '35px'
        }
    };
}

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function customClassNames(cls, name) {
    return cls.split(' ').reduce(function (res, cur) {
        res && (res += ' ');
        return res + cur + '__' + name;
    }, '');
}

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
        }, _this.refOverlay = function (overlayRef) {
            _this.overlayRef = overlayRef;
        }, _this.refContent = function (contentRef) {
            _this.contentRef = contentRef;
        }, _this.handleKeyup = function (e) {
            if (_this.props.keyboard && e.keyCode == 27) {
                _this.onClose();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ModalPresenter, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.contentRef.focus();
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
                mask = _props.mask,
                keyboard = _props.keyboard,
                open = _props.open;

            var overlayClassName = className && customClassNames(className, 'overlay');
            var contentClassName = className && customClassNames(className, 'content');
            var headerClassName = className && customClassNames(className, 'header');
            var closeClassName = className && customClassNames(className, 'close');
            var bodyClassName = className && customClassNames(className, 'body');
            var styles = stylesheet({ open: open, mask: mask });
            return React.createElement(
                'div',
                {
                    ref: this.refOverlay,
                    className: cx(css(styles.overlay), overlayClassName),
                    onClick: keyboard ? this.handleOverlayClick : null
                },
                React.createElement(
                    'article',
                    {
                        ref: this.refContent,
                        tabIndex: '-1',
                        className: cx(css(styles.content), contentClassName),
                        onKeyUp: this.handleKeyup
                    },
                    React.createElement(
                        'header',
                        { className: cx(css(styles.header), headerClassName) },
                        headerChildren ? headerChildren : React.createElement(
                            'span',
                            null,
                            title
                        ),
                        React.createElement(
                            'span',
                            { className: cx(css(styles.close), closeClassName), onClick: onClose },
                            '\xD7'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: cx(css(styles.body), bodyClassName) },
                        children
                    )
                )
            );
        }
    }]);

    return ModalPresenter;
}(Component);

ModalPresenter.defaultProps = {
    mask: true,
    keyboard: true,
    open: false
};
ModalPresenter.__docgenInfo = {
    'description': '',
    'displayName': 'ModalPresenter',
    'props': {
        'mask': {
            'defaultValue': {
                'value': 'true',
                'computed': false
            },
            'required': false
        },
        'keyboard': {
            'defaultValue': {
                'value': 'true',
                'computed': false
            },
            'required': false
        },
        'open': {
            'defaultValue': {
                'value': 'false',
                'computed': false
            },
            'required': false
        }
    }
};

function Modal(props) {
    var title = props.title,
        children = props.children,
        onClose = props.onClose,
        open = props.open,
        className = props.className,
        headerChildren = props.headerChildren,
        mask = props.mask,
        maskClosable = props.maskClosable,
        keyboard = props.keyboard;

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
                mask: mask,
                maskClosable: maskClosable,
                keyboard: keyboard
            },
            children
        )
    );
}
Modal.__docgenInfo = {
    'description': '',
    'displayName': 'Modal'
};

export default Modal;
