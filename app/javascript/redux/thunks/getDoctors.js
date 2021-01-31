const getDoctorsThunk = () => {
  const getDoctors = async () => {
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
  return getDoctors;
};

export default getDoctorsThunk;
