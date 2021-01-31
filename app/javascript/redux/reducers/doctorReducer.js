import { ALLDOCTORS, VIEWDOCTAB } from '../actions';

const doctorReducer = (state = [], action) => {
  switch (action.type) {
    case ALLDOCTORS:
      return {
        doctors: action.input,
      };

    case VIEWDOCTAB:
      return {
        tab: action.input,
      };
    default:
      return state;
  }
};

export default doctorReducer;
