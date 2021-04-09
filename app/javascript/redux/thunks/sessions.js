const axios = require('axios');

export const checkLogin = token => {
  const checkUserLogin = () => {
    const url = '/sessions';

    // const url = 'https://defoebrand-health-tracker.herokuapp.com/sessions';
    const response = axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = response.then(res => res.data);
    return data;
  };
  return checkUserLogin;
};

export const signInUser = (status, email, password) => {
  const userType = status === false ? 'user' : 'doctor';
  const signIn = () => {
    const url = '/sessions';
    // const url = 'https://defoebrand-health-tracker.herokuapp.com/sessions';
    try {
      const response = axios.post(url, {
        email,
        password,
        user_type: userType,
      }, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const dataJson = response.then(res => res.data);
      return dataJson;
    } catch {
      throw new Error('Network Response Failed.');
    }
  };
  return signIn;
};
