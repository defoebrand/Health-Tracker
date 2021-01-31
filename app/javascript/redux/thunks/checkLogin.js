const checkLoginThunk = token => {
  const checkLogin = async () => {
    const url = '/sessions';
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };
  return checkLogin;
};
export default checkLoginThunk;
