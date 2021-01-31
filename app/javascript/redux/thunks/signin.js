const signInThunk = (status, email, password) => {
  const signInUser = async () => {
    const url = status === false ? '/sessions' : '/user/doctor';
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
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
  return signInUser;
};

export default signInThunk;
