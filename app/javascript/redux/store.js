import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import communityReducer from './reducers/communityReducer';
import doctorReducer from './reducers/doctorReducer';
import friendsReducer from './reducers/friendsReducer';

const combinedReducers = combineReducers({
  userReducer,
  communityReducer,
  doctorReducer,
  friendsReducer,
});

export default createStore(
  combinedReducers,
  applyMiddleware(thunk),
);
