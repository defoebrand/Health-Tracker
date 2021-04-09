import { UPDATEDATA } from '../actions';

const patientReducer = (state = { name: '' }, action) => {
  switch (action.type) {
    case UPDATEDATA:
      console.log(action);
      return {
        user: {
          id: action.input.user.id,
          name: action.input.user.name,
          email: action.input.user.email,
          age: action.input.user.age,
          dob: action.input.user.dob,
          bloodSugar: JSON.parse(action.input.user.blood_sugar),
          diastolic: JSON.parse(action.input.user.diastolic),
          height: JSON.parse(action.input.user.height),
          pulse: JSON.parse(action.input.user.pulse),
          systolic: JSON.parse(action.input.user.systolic),
          temperature: JSON.parse(action.input.user.temperature),
          weight: JSON.parse(action.input.user.weight),
        },
      };
    default:
      return state;
  }
};

export default patientReducer;
