import React from 'react';
import ReactDOM from 'react-dom';
import RouterComponent from './router';
import * as serviceWorker from './serviceWorker';
import "./common.scss"; //公用的样式
ReactDOM.render(<RouterComponent />, document.getElementById('root'));

serviceWorker.unregister();
