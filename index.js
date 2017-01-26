/**
 * Created by jwarnock on 1/23/17.
 */

var React = require('react');
var ReactDom = require('react-dom');
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');
var MyAwesomeReactComponent = require('./header.js');

var App = function App() {
    return React.createElement(
        MuiThemeProvider,
        null,
        React.createElement(MyAwesomeReactComponent, null)
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));


// var header = require('./header.js');
//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// // var MyAwesomeReactComponent = require('./MyAwesomeReactComponent');
//
// const App = () => (
//     <MuiThemeProvider>
//         <MyAwesomeReactComponent />
//     </MuiThemeProvider>
// );
//
// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// );