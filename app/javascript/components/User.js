import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

import LineRechartComponent from '../charts/line.rechart';

const User = () => {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [pulse, setPulse] = useState('');
  const [temp, setTemp] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
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
        const localPulse = data.pulse === null ? '{}' : data.pulse;
        setPulse(JSON.parse(localPulse));
        const localTemp = data.temperature === undefined ? '{}' : data.temperature;
        setTemp(JSON.parse(localTemp));
        const localBloodSugar = data.blood_sugar === null ? '{}' : data.blood_sugar;
        setBloodSugar(JSON.parse(localBloodSugar));
      }).catch(err => console.log(err));
  }, [history]);
  const newPulseData = [];
  const newTempData = [];
  const newBloodSugarData = [];
  const tempData = Object.keys(temp);
  const pulseData = Object.keys(pulse);
  const bloodSugarData = Object.keys(bloodSugar);
  pulseData.forEach(key => {
    Object.entries(pulse[key]).forEach(item => {
      newPulseData.push({ name: item[0], [key]: item[1] });
    });
  });
  tempData.forEach(key => {
    Object.entries(temp[key]).forEach(item => {
      newTempData.push({ name: item[0], [key]: item[1] });
    });
  });
  bloodSugarData.forEach(key => {
    Object.entries(bloodSugar[key]).forEach(item => {
      newBloodSugarData.push({ name: item[0], [key]: item[1] });
    });
  });
  return (
    <>
      <div sytle={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ width: '85vw', textAlign: 'center' }}>{`Hello ${user.name}!`}</h1>
        <Button variant="outline-danger" style={{ marginLeft: 10, whiteSpace: 'nowrap' }} onClick={() => history.push({ pathname: '/new-stats', state: { user } })}>New Stats</Button>

      </div>
      <h3>Pulse</h3>
      <LineRechartComponent pulse={newPulseData} />
      <h3>Temperature</h3>
      <LineRechartComponent pulse={newTempData} />
      <h3>Blood Sugar</h3>
      <LineRechartComponent pulse={newBloodSugarData} />
    </>
  );
};

export default User;
