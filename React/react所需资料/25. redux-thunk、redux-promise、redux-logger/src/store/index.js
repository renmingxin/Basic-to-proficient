import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';

// npm install redux-thunk --save
// npm install redux-promise --save
// npm install redux-logger --save

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers( applyMiddleware(thunk, promise, logger) )
);

export default store;