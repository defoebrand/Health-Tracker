import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import DoctorCard from '../components/DoctorCard';
import Appointments from './Appointments';

import { allDoctors } from '../redux/actions';

import getAllDoctors from '../redux/thunks/doctors';
import { getMyData } from '../redux/thunks/users';

const Doctors = ({
  doctors, user, tab, dispatch,
}) => {
  const [myDoctors, setMyDoctors] = useState([]);
  const [failedMessage, setFailedMessage] = useState('noMessage');
  const [error, setError] = useState('');

  const token = localStorage.token === ''
    ? sessionStorage.token
    : localStorage.token;

  useEffect(() => {
    dispatch(getAllDoctors()).then(data => {
      try {
        dispatch(allDoctors(data));
      } catch {
        throw new Error('Failed to Retrieve Doctors.');
      }
    }).catch(err => {
      setError(err.message);
      setFailedMessage('displayMessage');
    });
  }, []);

  useEffect(() => {
    if (user.name !== '') {
      dispatch(getMyData(user, token)).then(data => {
        try {
          setMyDoctors(data.doctors);
        } catch {
          throw new Error('Failed to Retrieve Your Doctors.');
        }
      }).catch(err => {
        setError(err.message);
        setFailedMessage('displayMessage');
      });
    }
  }, []);

  return (
    <>
      <h3 className={failedMessage}>{error}</h3>
      <Tabs
        defaultActiveKey={user.name === '' ? 'all' : tab}
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
        <Tab eventKey="appointments" title="My Appointments">
          <Appointments />
        </Tab>
      </Tabs>

    </>
  );
};

Doctors.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tab: PropTypes.string,
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

Doctors.defaultProps = {
  tab: 'personal',
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
  tab: state.doctorReducer.tab,
  doctors: state.doctorReducer.doctors,
  user: state.userReducer.user,
}))(Doctors);
