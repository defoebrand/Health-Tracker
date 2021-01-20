import { combineReducers, createStore } from 'redux';

import {
  SUBMIT, COMMUNITY, COMMUNITIES, TAB,
} from './actions';

const initialUser = { name: '' };
const initialCommunity = [];
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

const allCommunitiesReducer = (state = initialCommunity, action) => {
  switch (action.type) {
    case COMMUNITIES:
      return {
        communities: action.input,
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
  allCommunitiesReducer,
  tabReducer,
});

export default createStore(combinedReducers);
