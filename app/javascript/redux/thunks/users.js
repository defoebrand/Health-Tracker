const axios = require('axios');

export const createUser = (name, email, password,
  dob, age, sex, gender,
  ethnicity, heightData, weightData) => {
  const registerUser = () => {
    const url = '/users';
    try {
      const response = axios.post(url, {
        user: {
          name,
          email,
          password,
          dob,
          age,
          sex,
          gender,
          ethnicity: ethnicity.toString(),
          height: heightData,
          weight: weightData,
        },
      }, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = response.then(res => res.data);
      return data;
    } catch {
      throw new Error('Network Response Failed.');
    }
  };
  return registerUser;
};

export const getMyData = (user, token) => {
  const getData = () => {
    const url = `/users/${user.id}`;
    try {
      const response = axios.get(url, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.then(res => res.data);
      return data;
    } catch {
      throw new Error('Network Response Failed.');
    }
  };
  return getData;
};

export const updateUserData = (user, token, newUserData) => {
  const updateData = () => {
    const url = `/users/${user.id}`;
    try {
      const response = axios.patch(url, {
        user: newUserData,
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.then(res => res.data);
      return data;
    } catch {
      throw new Error('Network Response Failed.');
    }
  };
  return updateData;
};

export const addUserStats = (user, newUserStats, token, setPwError) => {
  const addStats = () => {
    const url = `/users/${user.id}`;
    try {
      const response = axios.patch(url,
        { user: newUserStats },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            Authorization: `Bearer ${token}`,
          },
        });
      const data = response.then(res => res.data);
      return data;
    } catch {
      setPwError({ border: '1px solid red' });
      throw new Error('Incorrect Password');
    }
  };
  return addStats;
};
