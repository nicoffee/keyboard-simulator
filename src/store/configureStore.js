import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

let middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
};

export default configureStore;
