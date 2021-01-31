const updateSettingsThunk = (user, token, newUserData) => {
  const updateUserData = async () => {
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
  return updateUserData;
};

export default updateSettingsThunk;
