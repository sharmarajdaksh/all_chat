import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './index.css'; // sets overall global styles such as font 
import App from './App';
import * as serviceWorker from './serviceWorker';
import chatReducer from './store/reducers/chat';
import nameReducer from './store/reducers/name';

// assign tags to individual reducers and combine
const rootReducer = combineReducers({
    name: nameReducer,
    chat: chatReducer
});

// create a store using the combined reducers
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
