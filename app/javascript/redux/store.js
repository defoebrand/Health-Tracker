import { combineReducers, createStore } from 'redux';

import { SUBMIT } from './actions';

const initialState = { name: '' };

const userReducer = (state = initialState, action) => {
  console.log('action', action);
  switch (action.type) {
    case SUBMIT:
      return {
        user: action.input,
      };

    default:
      return state;
  }
};

export const combinedReducers = combineReducers({
  userReducer,
});

export default createStore(combinedReducers);
