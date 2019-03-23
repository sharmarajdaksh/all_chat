import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router';
import createHashHistory from 'history/createHashHistory';

import './index.css'; // sets overall global styles such as font 
import App from './App';
import * as serviceWorker from './serviceWorker';
import chatReducer from './store/reducers/chat';
import nameReducer from './store/reducers/name';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

// assign tags to individual reducers and combine
const rootReducer = combineReducers({
    name: nameReducer,
    chat: chatReducer
});

// create a store using the combined reducers
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(<Router basename={process.env.PUBLIC_URL} history={hashHistory}><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
