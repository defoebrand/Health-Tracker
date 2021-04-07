const axios = require('axios');

const getAllDoctors = () => {
  const allDoctors = () => {
    const url = 'https://defoebrand-health-tracker.herokuapp.com/doctors';
    try {
      const response = axios.get(url, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = response.then(res => res.data);
      return data;
    } catch {
      throw new Error('Failed to Retrieve Doctors.');
    }
  };
  return allDoctors;
};

export default getAllDoctors;
