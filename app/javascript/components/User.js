import React, { useEffect, useState } from 'react';
import LineRechartComponent from '../charts/line.rechart';

const User = () => {
  const [user, setUser] = useState('');
  const [pulse, setPulse] = useState('');
  useEffect(() => {
    // const url = 'http://localhost:3000/user';
    // const url = 'https://obscure-island-28750.herokuapp.com/user';
    const url = '/user';
    const { token } = localStorage;
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      }).then(data => {
        setUser(data);
        setPulse(JSON.parse(data.pulse));
      }).catch(err => console.log(err));
  }, []);
  const newData = [];
  const pulseData = Object.keys(pulse);
  pulseData.forEach(key => {
    Object.entries(pulse[key]).forEach(item => {
      newData.push({ name: item[0], [key]: item[1] });
    });
  });
  return (
    <>
      <h1>{user.name}</h1>
      <LineRechartComponent pulse={newData} />
    </>
  );
};

export default User;
