import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducer from './store/reducers/mainReducer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
