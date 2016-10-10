'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _simpleReactBootstrapButtonDropdown = require('simple-react-bootstrap-button-dropdown');

var _simpleReactBootstrapButtonDropdown2 = _interopRequireDefault(_simpleReactBootstrapButtonDropdown);

var spreadClassNames = function spreadClassNames(userClassName, baseCssClasses) {
    return (baseCssClasses || '') + ' ' + (userClassName || '');
};

var NavBarForm = function NavBarForm(props) {
    var className = props.className;
    var style = props.style;

    var rest = _objectWithoutProperties(props, ['className', 'style']);

    return _react2['default'].createElement(
        'form',
        { onSubmit: function (evt) {
                return evt.preventDefault();
            }, className: spreadClassNames(className, 'navbar-form') },
        props.children
    );
};

var NavBarBrand = function NavBarBrand(props) {
    return _react2['default'].cloneElement(props.children, { className: 'navbar-brand', key: 'nav-bar-brand' });
};

var NavBarToggle = function NavBarToggle(props) {
    return _react2['default'].createElement(
        'button',
        _extends({}, props, { type: 'button', className: 'navbar-toggle collapsed' }),
        _react2['default'].createElement(
            'span',
            { className: 'sr-only' },
            'Toggle navigation'
        ),
        _react2['default'].createElement('span', { className: 'icon-bar' }),
        _react2['default'].createElement('span', { className: 'icon-bar' }),
        _react2['default'].createElement('span', { className: 'icon-bar' })
    );
};

var NavBarHeader = function NavBarHeader(props) {
    return _react2['default'].createElement(
        'div',
        { className: 'navbar-header' },
        props.children
    );
};

var NavBarItem = function NavBarItem(props) {
    var disabled = props.disabled;
    var className = props.className;
    var href = props.href;
    var children = props.children;

    var rest = _objectWithoutProperties(props, ['disabled', 'className', 'href', 'children']);

    return _react2['default'].createElement(
        'li',
        _extends({ disabled: !!disabled, className: spreadClassNames(className, !!disabled ? 'disabled' : '') }, rest),
        _react2['default'].createElement(
            'a',
            { href: props.href },
            children
        )
    );
};

var NavBarDropdown = (function (_React$Component) {
    _inherits(NavBarDropdown, _React$Component);

    function NavBarDropdown() {
        _classCallCheck(this, NavBarDropdown);

        _get(Object.getPrototypeOf(NavBarDropdown.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(NavBarDropdown, [{
        key: 'render',
        value: function render() {
            var props = this.props;
            var toggleClassName = props.toggleClassName;
            var style = props.style;
            var disabled = props.disabled;

            var rest = _objectWithoutProperties(props, ['toggleClassName', 'style', 'disabled']);

            return _react2['default'].createElement(
                _simpleReactBootstrapButtonDropdown2['default'],
                { containerElementType: 'li', clean: true, className: 'dropdown ' + (!!disabled ? 'disabled' : ''), disabled: !!disabled },
                _react2['default'].createElement(
                    'a',
                    _extends({ className: spreadClassNames(toggleClassName, 'dropdown-toggle'), style: style || {} }, rest),
                    props.text,
                    ' ',
                    _react2['default'].createElement('span', { className: 'caret' })
                ),
                _react2['default'].createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    props.children
                )
            );
        }
    }]);

    return NavBarDropdown;
})(_react2['default'].Component);

var Nav = function Nav(props) {
    return _react2['default'].createElement(
        'ul',
        _extends({}, props, { className: 'nav navbar-nav' }),
        props.children
    );
};

var NavBar = (function (_React$Component2) {
    _inherits(NavBar, _React$Component2);

    function NavBar() {
        _classCallCheck(this, NavBar);

        _get(Object.getPrototypeOf(NavBar.prototype), 'constructor', this).call(this);
        this.state = { collapsed: true, heightExpanded: false, collapseHeight: null };
    }

    _createClass(NavBar, [{
        key: 'toggleMobileCollapse',
        value: function toggleMobileCollapse(evt) {
            var _this = this;

            if (this._pendingAnimationClear) {
                clearTimeout(this._pendingAnimationClear);
                this._pendingAnimationClear = null;
            }
            if (this.state.expanded || this.state.expanding) {
                this.setState({ collapsing: true, collapseHeight: null, expanding: false, expanded: false });
                this._pendingAnimationClear = setTimeout(function () {
                    _this.setState({ collapsing: false, collapseHeight: null });
                    _this._cachedHeight = null;
                }, 300);
            } else {

                if (!this._cachedHeight) {
                    var currentNode = evt.target,
                        collapseContentToToggle = undefined;

                    while (currentNode = currentNode.parentNode) {
                        if (currentNode.tagName === 'DIV') {
                            collapseContentToToggle = currentNode.nextSibling;
                            break;
                        }
                    }

                    collapseContentToToggle.style.visibility = 'hidden';
                    collapseContentToToggle.classList.add('in');
                    var offsetHeight = collapseContentToToggle.offsetHeight;
                    collapseContentToToggle.style.visibility = '';
                    collapseContentToToggle.classList.remove('in');

                    this._cachedHeight = offsetHeight;
                }

                this.setState({ collapsing: true, expanding: true });
                setTimeout(function () {
                    return _this.setState({ collapseHeight: _this._cachedHeight });
                }, 2);

                this._pendingAnimationClear = setTimeout(function () {
                    return _this.setState({ collapsing: false, expanded: true, expanding: false });
                }, 300);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var header = this.props.children.find(function (c) {
                return c.type === NavBarHeader;
            }),
                toggle = header ? header.props.children.find(function (c) {
                return c.type === NavBarToggle;
            }) : null,
                toggleIndex = toggle ? header.props.children.indexOf(toggle) : -1,
                navSubItems = this.props.children.filter(filterValidNavSubItems);

            if (toggleIndex >= 0) {
                header.props.children[toggleIndex] = _react2['default'].cloneElement(toggle, { onClick: this.toggleMobileCollapse.bind(this), key: 'nav-bar-toggle' });
            }

            return _react2['default'].createElement(
                'nav',
                { className: 'navbar navbar-default' },
                _react2['default'].createElement(
                    'div',
                    { className: 'container-fluid' },
                    header || null,
                    _react2['default'].createElement(
                        'div',
                        { className: (this.state.collapsing ? ' collapsing ' : ' collapse ') + ' navbar-collapse ' + (this.state.expanded ? ' in ' : ''), style: { height: this.state.collapseHeight || null } },
                        navSubItems
                    )
                )
            );
        }
    }]);

    return NavBar;
})(_react2['default'].Component);

NavBar.Nav = Nav;
NavBar.Item = NavBarItem;
NavBar.Header = NavBarHeader;
NavBar.Brand = NavBarBrand;
NavBar.Toggle = NavBarToggle;
NavBar.Dropdown = NavBarDropdown;
NavBar.Form = NavBarForm;

function filterValidNavSubItems(item) {
    return item.type !== NavBarHeader;
}

exports['default'] = NavBar;
module.exports = exports['default'];