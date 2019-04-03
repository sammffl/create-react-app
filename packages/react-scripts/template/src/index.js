/*
 * @Author: shen 
 * @Date: 2019-04-03 10:55:05 
 * @Last Modified by: shen
 * @Last Modified time: 2019-04-03 14:21:06
 */

import 'react-app-polyfill/ie9';
import 'amfe-flexible';
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './Assets/styles/index.scss';
import App from './Container/Layout';
import * as serviceWorker from './serviceWorker';

ReactDOM.render (<App />, document.getElementById ('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister ();
