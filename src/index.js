import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import App from './App'
import { reducer } from "./Reducers";

const store = createStore(reducer, applyMiddleware(logger, thunk ));

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <App />
        </Router> 
    </Provider>,
    document.getElementById('root'))