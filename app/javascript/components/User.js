import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

import LineRechartComponent from '../charts/line.rechart';

const User = () => {
  const history = useHistory();
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
        console.log('refreshed user');
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
      <div sytle={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ width: '85vw', textAlign: 'center' }}>{`Hello ${user.name}!`}</h1>
        <Button variant="outline-danger" style={{ marginLeft: 10, whiteSpace: 'nowrap' }} onClick={() => history.push({ pathname: '/new-stats', state: { user } })}>New Stats</Button>

      </div>
      <LineRechartComponent pulse={newData} />
    </>
  );
};

export default User;
