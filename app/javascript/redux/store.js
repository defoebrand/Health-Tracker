import { combineReducers, createStore } from 'redux';

import { SUBMIT } from './actions';

const initialState = '';

const searchReducer = (state = initialState, action) => {
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
  searchReducer,
});

export default createStore(combinedReducers);
