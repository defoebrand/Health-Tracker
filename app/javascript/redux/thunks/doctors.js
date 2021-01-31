export const getAllDoctors = () => {
  const allDoctors = async () => {
    const url = '/doctors';
    try {
      const response = await fetch(url, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = response.json();
      return data;
    } catch {
      throw new Error('Failed to Retrieve Doctors.');
    }
  };
  return allDoctors;
};

export const getMyDoctors = (user, token) => {
  const myDoctors = async () => {
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
  return myDoctors;
};
