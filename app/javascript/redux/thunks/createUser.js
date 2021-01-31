const registerThunk = (name, email, password,
  dob, age, sex, gender,
  ethnicity, heightData, weightData) => {
  const createUser = async () => {
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
  return createUser;
};

export default registerThunk;
