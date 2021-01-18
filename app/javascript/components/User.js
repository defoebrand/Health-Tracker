import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
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
  const newPulseData = [];
  const newTempData = [];
  const newBloodSugarData = [];
  const newBloodPressureData = [];
  const tempData = Object.keys(temp);
  const pulseData = Object.keys(pulse);
  const bloodSugarData = Object.keys(bloodSugar);
  const systolicData = Object.keys(systolic);
  const diastolicData = Object.keys(diastolic);
  // console.log('user', user);
  pulseData.forEach(key => {
    Object.entries(pulse[key]).forEach(item => {
      newPulseData.push({ name: key, [`${user.name} Pulse`]: item[1] });
    });
  });
  tempData.forEach(key => {
    Object.entries(temp[key]).forEach(item => {
      newTempData.push({ name: key, [`${user.name} Temp`]: item[1] });
    });
  });
  bloodSugarData.forEach(key => {
    Object.entries(bloodSugar[key]).forEach(item => {
      newBloodSugarData.push({ name: key, [`${user.name} Blood Sugar`]: item[1] });
    });
  });
  if (systolicData.length !== 0) {
    systolicData.forEach(key => {
      Object.entries(systolic[key]).forEach(item => {
        newBloodPressureData.push({ name: key, systolic: item[1] });
      });
    });
    newBloodPressureData.forEach((entry, index) => {
      diastolicData.forEach(key => {
        Object.entries(diastolic[key]).forEach(item => {
          if (key === newBloodPressureData[index].name) {
            newBloodPressureData[index] = { ...newBloodPressureData[index], diastolic: item[1] };
          }
        });
      });
    });
  }
  // console.log('newBloodPressureData', newBloodPressureData);

  return (
    <>
      <div style={{
        display: 'flex', justifyContent: 'space-between', width: '85vw', margin: '0 auto',
      }}
      >
        <h1>{`Hello ${user.name}!`}</h1>
        <Button variant="success" style={{ marginLeft: 10, whiteSpace: 'nowrap' }} onClick={() => history.push({ pathname: '/new-stats', state: { user } })}>Add Stats</Button>
      </div>

      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h3>{`BMI - ${Math.round(user.weight / ((user.height / 100) * (user.height / 100))).toString()}`}</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Charting To Be Added</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h3>Blood Pressure</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body><LineRechartComponent bpChartData={newBloodPressureData} /></Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h3>Temperature</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body><LineRechartComponent chartData={newTempData} /></Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h3>Pulse</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body><LineRechartComponent chartData={newPulseData} /></Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h3>Blood Sugar</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body><LineRechartComponent chartData={newBloodSugarData} /></Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    </>
  );
};

export default User;
