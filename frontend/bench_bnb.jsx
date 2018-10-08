import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { actionFetchBenches } from './actions/bench_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.actionFetchBenches = actionFetchBenches;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
