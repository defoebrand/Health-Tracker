const addStatsThunk = (user, newUserStats, token, setPwError) => {
  const addUserStats = async () => {
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
  return addUserStats;
};

export default addStatsThunk;
