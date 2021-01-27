import { APPOINTMENT, VIEWTAB } from '../actions';

const friendsReducer = (state = '', action) => {
  switch (action.type) {
    case APPOINTMENT:
      return {
        doctor: action.input,
      };
    case VIEWTAB:
      return {
        tab: action.input,
      };

    default:
      return state;
  }
};

export default friendsReducer;
