"use strict";

/**
 * Created by jwarnock on 1/24/17.
 */

var bab = require('babel-core');

console.log(bab.transform("import React from 'react';import RaisedButton from 'material-ui/RaisedButton';const MyAwesomeReactComponent = () => ( <RaisedButton label='Default' />);export default MyAwesomeReactComponent;"));

//# sourceMappingURL=node-core-compiled.js.map