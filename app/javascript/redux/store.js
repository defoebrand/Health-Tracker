import { combineReducers, createStore } from 'redux';

import { SUBMIT, COMMUNITY } from './actions';

const initialUser = { name: '' };
const initialCommunity = '';

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case SUBMIT:
      return {
        user: action.input,
      };

    default:
      return state;
  }
};

const communityReducer = (state = initialCommunity, action) => {
  switch (action.type) {
    case COMMUNITY:
      return {
        community: action.input,
      };

    default:
      return state;
  }
};

export const combinedReducers = combineReducers({
  userReducer,
  communityReducer,
});

export default createStore(combinedReducers);
