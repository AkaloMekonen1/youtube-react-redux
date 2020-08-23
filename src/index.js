import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(reducer)
store.subscribe(()=>console.log(store.getState()))

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
