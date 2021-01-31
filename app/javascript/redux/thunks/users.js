export const updateUserData = (user, token, newUserData) => {
  const updateData = async () => {
    const url = `/users/${user.id}`;
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({ user: newUserData }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch {
      throw new Error('Network Response Failed.');
    }
  };
  return updateData;
};

export const createUser = (name, email, password,
  dob, age, sex, gender,
  ethnicity, heightData, weightData) => {
  const registerUser = async () => {
    const url = '/users';
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
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
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await response.json();
      return data;
    } catch {
      throw new Error('Network Response Failed.');
    }
  };
  return registerUser;
};

export const addUserStats = (user, newUserStats, token, setPwError) => {
  const addStats = async () => {
    const url = `/users/${user.id}`;
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify({ user: newUserStats }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch {
      setPwError({ border: '1px solid red' });
      throw new Error('Incorrect Password');
    }
  };
  return addStats;
};
