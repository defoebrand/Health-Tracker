export const signInUser = (status, email, password) => {
  const signIn = async () => {
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
  return signIn;
};

export const checkLogin = token => {
  const checkUserLogin = async () => {
    const url = '/sessions';
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };
  return checkUserLogin;
};
