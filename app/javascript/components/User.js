import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { myDoctors } from '../redux/actions';
import {
  basePulse, baseTemp, baseSys, baseDia, baseBloodSugar,
} from '../helpers/baseData';

import StatChart from './StatChart';

import LineRechartComponent from '../charts/line.rechart';

const User = ({ dispatch }) => {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [pulse, setPulse] = useState('');
  const [temp, setTemp] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [weight, setWeight] = useState({ measurements: '' });
  const [height, setHeight] = useState('');

  useEffect(() => {
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
        setWeight(JSON.parse(data.weight));
        setHeight(JSON.parse(data.height));
      }).catch(err => console.log(err));
  }, [history]);

  useEffect(() => {
    const url = '/user/my-doctors';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: {
          id: user.id,
        },
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      }).then(data => {
        const myDocs = [];
        data.myDocs.forEach(doc => {
          myDocs.push(doc.name);
        });
        dispatch(myDoctors(myDocs));
      }).catch(err => console.log(err));
  }, [user]);

  const newPulseData = [];
  const newTempData = [];
  const newBloodSugarData = [];
  const newBloodPressureData = [];
  const newBMIData = [];
  const weightData = Object.keys(weight.measurements);
  const tempData = Object.keys(temp);
  const pulseData = Object.keys(pulse);
  const bloodSugarData = Object.keys(bloodSugar);
  const systolicData = Object.keys(systolic);
  const diastolicData = Object.keys(diastolic);
  let currentBMI;

  const heightForBMI = (Number(height.height) / 100) * (Number(height.height) / 100);
  const weightForBMI = key => (
    weight.scale === 'Metric'
      ? Math.round(Number(weight.measurements[key]))
      : (703 * Math.round(Number(weight.measurements[key]))));
  weightData.forEach((key, index) => {
    newBMIData.push({
      name: key,
      [`${user.name}'s BMI`]: (weightForBMI(key) / (heightForBMI)).toString(),
      baseBMI: 23,
    });
    if (index === weightData.length - 1) {
      currentBMI = Math.round(Number(weight.measurements[key]) / (heightForBMI)).toString();
    }
  });
  pulseData.forEach(key => {
    Object.entries(pulse[key]).forEach(item => {
      newPulseData.push({ name: key, [`${user.name}'s Pulse`]: item[1], basePulse: basePulse(user) });
    });
  });
  tempData.forEach(key => {
    Object.entries(temp[key]).forEach(item => {
      newTempData.push({ name: key, [`${user.name}'s Temp`]: item[1], baseTemp: baseTemp(user) });
    });
  });
  bloodSugarData.forEach(key => {
    Object.entries(bloodSugar[key]).forEach(item => {
      newBloodSugarData.push({ name: key, [`${user.name}'s Blood Sugar`]: item[1], baseBloodSugar: baseBloodSugar(user) });
    });
  });
  if (systolicData.length !== 0) {
    systolicData.forEach(key => {
      Object.entries(systolic[key]).forEach(item => {
        newBloodPressureData.push({ name: key, [`${user.name}'s Systolic`]: item[1], baseSys: baseSys(user) });
      });
    });
    newBloodPressureData.forEach((entry, index) => {
      diastolicData.forEach(key => {
        Object.entries(diastolic[key]).forEach(item => {
          if (key === newBloodPressureData[index].name) {
            newBloodPressureData[index] = {
              ...newBloodPressureData[index],
              [`${user.name}'s Diastolic`]: item[1],
              baseDia: baseDia(user),
            };
          }
        });
      });
    });
  }
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
      <StatChart title={`BMI - ${currentBMI}`} data={newBMIData} />
      <StatChart title="Blood Pressure" data={newBloodPressureData} bp />
      <StatChart title="Temperature" data={newTempData} />
      <StatChart title="Pulse" data={newPulseData} />
      <StatChart title="Blood Sugar" data={newBloodSugarData} />
    </>
  );
};

User.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(User);
