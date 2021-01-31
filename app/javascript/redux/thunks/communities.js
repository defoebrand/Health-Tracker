export const getAllCommunities = () => {
  const allCommunitiesFunc = async () => {
    const url = '/communities';
    try {
      const response = await fetch(url, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = response.json();
      return data;
    } catch {
      throw new Error('Failed to Retrieve Communities.');
    }
  };
  return allCommunitiesFunc;
};

export const getMyCommunities = (user, token) => {
  const myCommunitiesFunc = async () => {
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
  return myCommunitiesFunc;
};
