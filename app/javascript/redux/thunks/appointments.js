export const getMyAppointments = (user, token) => {
  const getAppointments = async () => {
    const url = `/users/${user.id}`;
    try {
      const response = await fetch(url, {
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
  return getAppointments;
};

export const cancelMyAppointment = (appt, token) => {
  const cancelAppointment = async () => {
    const url = `/appointments/${appt.id}`;
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch {
      throw new Error('Failed to Cancel Appointment.');
    }
  };
  return cancelAppointment;
};

export const setNewAppointment = (token, doctor, date, time, notes) => {
  const scheduleAppointment = async () => {
    const url = '/appointments';
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          appt: {
            doc_name: doctor,
            date,
            time,
            notes,
          },
        }),
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
  return scheduleAppointment;
};
