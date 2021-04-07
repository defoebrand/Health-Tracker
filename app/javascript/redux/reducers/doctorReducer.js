import { ALLDOCTORS, VIEWDOCTAB, UPDATEDOC } from '../actions';

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

    case UPDATEDOC:
      return {
        user: {
          id: action.input.id,
          name: action.input.name,
          email: action.input.email,
          specialty: action.input.specialty,
          quote: action.input.quote,
          image: action.input.image,
        },
      };
    default:
      return state;
  }
};

export default doctorReducer;
