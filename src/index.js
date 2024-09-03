import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header";
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { func } from 'prop-types';
import Main  from './components/Main.js';
import Countlike from './components/Count.js';

const store = createStore(changeStore);
const root = ReactDOM.createRoot(document.getElementById('root'));

function changeStore(state = [], action) {
  console.log('1', state)
  switch (action.type) {
    case 'WRITE':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Fragment>
        <Countlike/>
      </React.Fragment>
    </Provider>
  </React.StrictMode>
);

