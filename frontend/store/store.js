import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const defaultPreloadedState = {};
if (window.currentUser) {
  defaultPreloadedState.entities = {
    users: { [window.currentUser.id]: window.currentUser }
  };
  defaultPreloadedState.session = { id: window.currentUser.id };
}

const configureStore = (preloadedState = defaultPreloadedState) => (
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;
