import { UPDATE, SIGNOUT } from '../actions';

const userReducer = (state = { name: '' }, action) => {
  switch (action.type) {
    case UPDATE:
      console.log(action);
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

export default userReducer;
