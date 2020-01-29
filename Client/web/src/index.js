import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './Reducers'
import middlewares from './Middlewares'

import 'bootstrap/dist/css/bootstrap.css'

const store = createStore(reducers, middlewares)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
