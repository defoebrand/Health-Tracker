const scheduleApptThunk = (token, doctor, date, time, notes) => {
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

export default scheduleApptThunk;
