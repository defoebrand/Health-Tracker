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
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
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
        const localTemp = data.temperature === null ? '{}' : data.temperature;
        setTemp(JSON.parse(localTemp));
        const localBloodSugar = data.blood_sugar === null ? '{}' : data.blood_sugar;
        setBloodSugar(JSON.parse(localBloodSugar));
        const localSystolic = data.systolic === null ? '{}' : data.systolic;
        setSystolic(JSON.parse(localSystolic));
        const localDiastolic = data.diastolic === null ? '{}' : data.diastolic;
        setDiastolic(JSON.parse(localDiastolic));
      }).catch(err => console.log(err));
  }, [history]);
  console.log('user', user);
  const newPulseData = [];
  const newTempData = [];
  const newBloodSugarData = [];
  const newSystolicData = [];
  const newDiastolicData = [];
  const newBloodPressureData = [{ systolic: [] }, { diastolic: [] }];
  const tempData = Object.keys(temp);
  const pulseData = Object.keys(pulse);
  const bloodSugarData = Object.keys(bloodSugar);
  const systolicData = Object.keys(systolic);
  const diastolicData = Object.keys(diastolic);
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
  systolicData.forEach(key => {
    Object.entries(systolic[key]).forEach(item => {
      // console.log('sysItem', sysItem);

      newBloodPressureData.push({ name: key, systolic: item[1] });
    });
  });
  newBloodPressureData.forEach((entry, index) => {
    // console.log('entry', entry);
    // console.log('index', index);
    diastolicData.forEach(key => {
      Object.entries(diastolic[key]).forEach(item => {
        if (key === newBloodPressureData[index].name) {
          newBloodPressureData[index] = { ...newBloodPressureData[index], diastolic: item[1] };
        }
        // newBloodPressureData.push({ name: key, diastolic: item[1] });
      });
    });
  });

  // diastolicData.forEach(key => {
  //   Object.entries(diastolic[key]).forEach(item => {
  //     newBloodPressureData.push({ name: key, diastolic: item[1] });
  //   });
  // });

  return (
    <>
      <div sytle={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ width: '85vw', textAlign: 'center' }}>{`Hello ${user.name}!`}</h1>
        <Button variant="outline-danger" style={{ marginLeft: 10, whiteSpace: 'nowrap' }} onClick={() => history.push({ pathname: '/new-stats', state: { user } })}>New Stats</Button>

      </div>

      <h3>Blood Pressure</h3>
      <LineRechartComponent bpChartData={newBloodPressureData} />
      <h3>Temperature</h3>
      <LineRechartComponent chartData={newTempData} />
      <h3>Pulse</h3>
      <LineRechartComponent chartData={newPulseData} />
      <h3>Blood Sugar</h3>
      <LineRechartComponent chartData={newBloodSugarData} />
    </>
  );
};

export default User;
