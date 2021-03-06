/**
 * Created by jwarnock on 1/24/17.
 */
'use strict';

var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var MyAwesomeReactComponent = function MyAwesomeReactComponent() {
    return _react2.default.createElement(_RaisedButton2.default, { label: 'Default' });
};

exports.default = MyAwesomeReactComponent;

//# sourceMappingURL=MyAwesomeReactComponent-compiled.js.map