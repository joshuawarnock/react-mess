/**
 * Created by jwarnock on 1/24/17.
 */
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _MyAwesomeReactComponent = require('./MyAwesomeReactComponent');

var _MyAwesomeReactComponent2 = _interopRequireDefault(_MyAwesomeReactComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(_MyAwesomeReactComponent2.default, null)
    );
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));