import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';


import './styles/main.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider >
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
