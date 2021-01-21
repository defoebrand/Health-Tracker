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
    const url = '/user';
    // const url = 'https://defoebrand-health-tracker.herokuapp.com/user';
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
  console.log(user);
  const basePulse = user => {
    if (user.age > 65) {
      return 80;
    } if (user.age > 20) {
      return 60;
    } if (user.age > 12) {
      return 80;
    } if (user.age > 5) {
      return 100;
    } if (user.age > 2) {
      return 115;
    } if (user.age > 1) {
      return 125;
    }
    return 135;
  };
  const baseTemp = user => {
    if (user.age > 10 && user.age < 65) {
      return 37;
    }
    return 36;
  };
  const baseSys = user => {
    if (user.age > 59) {
      return 134;
    } if (user.age > 54) {
      return 131;
    } if (user.age > 49) {
      return 129;
    } if (user.age > 44) {
      return 127;
    } if (user.age > 39) {
      return 125;
    } if (user.age > 34) {
      return 123;
    } if (user.age > 29) {
      return 122;
    } if (user.age > 24) {
      return 121;
    } if (user.age > 19) {
      return 120;
    }
    return 117;
  };

  const baseDia = user => {
    if (user.age > 59) {
      return 87;
    } if (user.age > 54) {
      return 86;
    } if (user.age > 49) {
      return 85;
    } if (user.age > 44) {
      return 84;
    } if (user.age > 39) {
      return 83;
    } if (user.age > 34) {
      return 82;
    } if (user.age > 29) {
      return 81;
    } if (user.age > 24) {
      return 80;
    } if (user.age > 19) {
      return 79;
    }
    return 77;
  };
  const baseBloodSugar = user => {
    if (user.age > 19) {
      return 5.0;
    } if (user.age > 12) {
      return 6.1;
    }
    return 7.2;
  };
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
      newPulseData.push({ name: key, [`${user.name} Pulse`]: item[1], basePulse: basePulse(user) });
    });
  });
  tempData.forEach(key => {
    Object.entries(temp[key]).forEach(item => {
      newTempData.push({ name: key, [`${user.name} Temp`]: item[1], baseTemp: baseTemp(user) });
    });
  });
  bloodSugarData.forEach(key => {
    Object.entries(bloodSugar[key]).forEach(item => {
      newBloodSugarData.push({ name: key, [`${user.name} Blood Sugar`]: item[1], baseBloodSugar: baseBloodSugar(user) });
    });
  });
  if (systolicData.length !== 0) {
    systolicData.forEach(key => {
      Object.entries(systolic[key]).forEach(item => {
        newBloodPressureData.push({ name: key, systolic: item[1], baseSys: baseSys(user) });
      });
    });
    newBloodPressureData.forEach((entry, index) => {
      diastolicData.forEach(key => {
        Object.entries(diastolic[key]).forEach(item => {
          if (key === newBloodPressureData[index].name) {
            newBloodPressureData[index] = {
              ...newBloodPressureData[index],
              diastolic: item[1],
              baseDia: baseDia(user),
            };
          }
        });
      });
    });
  }
  // console.log('newBloodPressureData', newBloodPressureData);
  console.log('newTempData', newTempData);
  return (
    <>
      <div className="welcomeBanner">
        <h1 style={{ whiteSpace: 'nowrap' }}>{`Hello ${user.name}!`}</h1>
        <img src="http://www.messagescollection.com/wp-content/uploads/2015/04/cute-cat-profile-for-facebook.jpg" alt={`${user.name} profile pic`} style={{ borderRadius: '50%', width: '10vw', minWidth: 100 }} />

        <Button
          variant="success"
          style={{
            whiteSpace: 'nowrap', height: 'auto', width: '20%', minWidth: 'max-content', padding: '10px',
          }}
          onClick={() => history.push({ pathname: '/new-stats', state: { user } })}
        >
          Add Stats
        </Button>
      </div>

      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h3>{`BMI - ${Math.round(user.weight / ((user.height / 100) * (user.height / 100))).toString()}`}</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <LineRechartComponent chartData={[{ name: 'Jan21-10a', [`${user.name} BMI`]: `${Math.round(user.weight / ((user.height / 100) * (user.height / 100))).toString()}`, baseBMI: 23 }]} />
            </Card.Body>
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
