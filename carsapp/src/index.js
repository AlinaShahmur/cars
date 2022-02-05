import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import appReducer from './store/appReducer'

const appStore = createStore(appReducer)

ReactDOM.render(
  <Provider store={appStore}>
     <App />
  </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
