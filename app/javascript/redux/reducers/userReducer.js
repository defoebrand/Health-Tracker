import { UPDATE, SIGNOUT } from '../actions';

const userReducer = (state = { name: '' }, action) => {
  switch (action.type) {
    case UPDATE:
      if (action.input.user.specialty) {
        return {
          user: {
            id: action.input.user.id,
            name: action.input.user.name,
            email: action.input.user.email,
            specialty: action.input.user.specialty,
            appointments: action.input.appointments,
          },
        };
      }
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
