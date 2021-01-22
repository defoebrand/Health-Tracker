import { combineReducers, createStore } from 'redux';

import {
  SUBMIT, COMMUNITY, COMMUNITIES, TAB, DOCTORS, DOCTOR, SIGNOUT,
} from './actions';

const initialUser = { name: '' };
const initialArray = [];
const initialTab = '';

const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case SUBMIT:
      return {
        user: {
          id: action.input.id,
          name: action.input.name,
          email: action.input.email,
          age: action.input.age,
          dob: action.input.dob,
          bloodSugar: JSON.parse(action.input.blood_sugar),
          diastolic: JSON.parse(action.input.diastolic),
          height: JSON.parse(action.input.height),
          pulse: JSON.parse(action.input.pulse),
          systolic: JSON.parse(action.input.systolic),
          temperature: JSON.parse(action.input.temperature),
          weight: JSON.parse(action.input.weight),
        },
      };
    case SIGNOUT:
      return {
        user: {
          name: action.input.name,
          id: 0,
          email: '',
          age: '',
          dob: '',
          bloodSugar: {},
          diastolic: {},
          height: {},
          pulse: {},
          systolic: {},
          temperature: {},
          weight: { measurements: '' },
        },
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
});

export default createStore(combinedReducers);
