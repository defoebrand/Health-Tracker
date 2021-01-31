const myDoctorsThunk = (user, token) => {
  const getMyDoctors = async () => {
    const url = `/users/${user.id}`;
    try {
      const response = await fetch(url, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.json();
      return data;
    } catch {
      throw new Error('Network Response Failed.');
    }
  };
  return getMyDoctors;
};
export default myDoctorsThunk;
