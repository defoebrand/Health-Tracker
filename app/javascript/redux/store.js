import { combineReducers, createStore } from 'redux';

import {
  SUBMIT, COMMUNITY, COMMUNITIES, TAB, DOCTORS, DOCTOR, MYDOCTORS,
} from './actions';

const initialUser = { name: '' };
const initialArray = [];
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

const communityReducer = (state = initialArray, action) => {
  switch (action.type) {
    case COMMUNITY:
      return {
        community: action.input,
      };

    default:
      return state;
  }
};

const allCommunitiesReducer = (state = initialArray, action) => {
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

const allDoctorsReducer = (state = initialArray, action) => {
  switch (action.type) {
    case DOCTORS:
      return {
        doctors: action.input,
      };

    default:
      return state;
  }
};

const myDoctorsReducer = (state = initialArray, action) => {
  switch (action.type) {
    case MYDOCTORS:
      return {
        myDocs: action.input,
      };

    default:
      return state;
  }
};

const appointmentReducer = (state = '', action) => {
  switch (action.type) {
    case DOCTOR:
      return {
        doctor: action.input,
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
  allDoctorsReducer,
  appointmentReducer,
  myDoctorsReducer,
});

export default createStore(combinedReducers);
