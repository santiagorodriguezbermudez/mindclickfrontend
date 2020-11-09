import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import combinedReducers from './reducers/index';
import './assets/styles/index.css';
import './assets/styles/reset.css';

require('dotenv').config();

const store = createStore(combinedReducers, applyMiddleware(thunk));

store.subscribe(() => {
  console.log('state updated', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
