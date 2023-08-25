
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './reducers';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
