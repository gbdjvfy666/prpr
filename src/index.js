import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReduxApp from './components/App-redux';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { func } from 'prop-types';


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
    break;
    default:
      return state
  }
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  </React.StrictMode>
);

