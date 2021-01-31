import { APPOINTMENT, VIEWCOMMTAB } from '../actions';

const friendsReducer = (state = '', action) => {
  switch (action.type) {
    case APPOINTMENT:
      return {
        doctor: action.input,
      };
    case VIEWCOMMTAB:
      return {
        tab: action.input,
      };

    default:
      return state;
  }
};

export default friendsReducer;
