const axios = require('axios');

export const setNewAppointment = (token, doctor, date, time, notes) => {
  const scheduleAppointment = () => {
    const url = '/appointments';
    try {
      const response = axios.post(url, {
        appt: {
          doc_name: doctor,
          date,
          time,
          notes,
        },
      }, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.then(res => res.data);
      return data;
    } catch {
      throw new Error('Network Response Failed.');
    }
  };
  return scheduleAppointment;
};

export const cancelMyAppointment = (appt, token) => {
  const cancelAppointment = () => {
    const url = `/appointments/${appt.id}`;
    try {
      const response = axios.delete(url, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.then(res => res.data);
      return data;
    } catch {
      throw new Error('Failed to Cancel Appointment.');
    }
  };
  return cancelAppointment;
};
