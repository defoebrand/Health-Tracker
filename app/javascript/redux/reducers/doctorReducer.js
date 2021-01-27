import { ALLDOCTORS } from '../actions';

const doctorReducer = (state = [], action) => {
  switch (action.type) {
    case ALLDOCTORS:
      return {
        doctors: action.input,
      };

    default:
      return state;
  }
};

export default doctorReducer;
