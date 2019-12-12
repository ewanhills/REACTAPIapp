import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './config/store'

import App from './App';


const app = <Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>


ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();