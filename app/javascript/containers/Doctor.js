import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import DoctorCard from '../components/DoctorCard';
import Appointments from './Appointments';

const fetch = require('node-fetch');

const Doctor = ({
  doctors, user,
}) => {
  const [myDoctors, setMyDoctors] = useState([]);
  const [failedMessage, setFailedMessage] = useState('noMessage');
  const [error, setError] = useState('');

  const token = localStorage.token === ''
    ? sessionStorage.token
    : localStorage.token;

  useEffect(() => {
    if (user.name !== '') {
      const url = '/user_doctors';
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({ user: { id: user.id } }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network Response Failed.');
        }).then(data => {
          try {
            setMyDoctors(data);
          } catch {
            throw new Error('Failed to Retrieve Your Doctors.');
          }
        }).catch(err => {
          setError(err.message);
          setFailedMessage('displayMessage');
        });
    }
  }, [user]);

  return (
    <>
      <h3 className={failedMessage}>{error}</h3>
      <Tabs
        defaultActiveKey={user.name === '' ? 'all' : 'personal'}
        transition={false}
        id="noanim-tab-example"
      >
        <Tab eventKey="personal" title="My Doctors">
          {doctors.filter(doctor => (
            myDoctors.some(docs => (
              doctor.name === docs.name)))).map((doctor, ind) => (
                <DoctorCard
                  key={doctor.name + doctor.specialty + ind.toString()}
                  img={doctor.image}
                  name={doctor.name}
                  specialty={doctor.specialty}
                  text={doctor.quote}
                />
          ))}
        </Tab>
        <Tab eventKey="all" title="All Doctors">
          {doctors.map((doctor, ind) => (
            <DoctorCard
              key={doctor.name + doctor.specialty + ind.toString()}
              img={doctor.image}
              name={doctor.name}
              specialty={doctor.specialty}
              text={doctor.quote}
            />
          ))}
        </Tab>
        <Tab eventKey="apointments" title="My Appointments">
          <Appointments />
        </Tab>
      </Tabs>

    </>
  );
};

Doctor.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      specialty: PropTypes.string,
      quote: PropTypes.string,
    }),
  ),
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

Doctor.defaultProps = {
  doctors: [{
    name: '',
    image: '',
    specialty: '',
    quote: '',
  }],
  user: {
    id: 0,
    name: '',
  },
};

export default connect(state => ({
  doctors: state.doctorReducer.doctors,
  user: state.userReducer.user,
}))(Doctor);
