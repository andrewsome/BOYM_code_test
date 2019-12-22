import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {};

const middeleware = [thunk];

export const store = createStore(
  rootReducer, 
  initialState, 
  compose(
    applyMiddleware(...middeleware)
  )
);

export default store;