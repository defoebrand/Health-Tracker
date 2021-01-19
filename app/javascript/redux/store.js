import { combineReducers, createStore } from 'redux';

import { SUBMIT, COMMUNITY, TAB } from './actions';

const initialUser = { name: '' };
const initialCommunity = '';
const initialTab = 'myCommunities';

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

const tabReducer = (state = initialTab, action) => {
  switch (action.type) {
    case TAB:
      return {
        tab: action.input,
      };

    default:
      return state;
  }
};

export const combinedReducers = combineReducers({
  userReducer,
  communityReducer,
  tabReducer,
});

export default createStore(combinedReducers);
