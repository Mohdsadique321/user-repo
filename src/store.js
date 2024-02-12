// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; 
import reducer from './reducers/reducer'

const rootReducer = combineReducers({
  user: reducer,
  error: reducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
