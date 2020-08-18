import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './components/reducer'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
const store = createStore(reducer)
console.log(store.getState())

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
