import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import DoctorCard from './DoctorCard';

import { allDoctors } from '../redux/actions';

import { getAllDoctors } from '../redux/thunks/doctors';

const featured = ['Dr. Kim', 'Dr. Smith'];

const Footer = ({ doctors, dispatch }) => {
  const [failedMessage, setFailedMessage] = useState('noMessage');
  const [error, setError] = useState('');

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

  return (
    <footer className="Footer">
      <Card className="text-center">
        <Card.Header>Featured Doctors</Card.Header>
        <h3 className={failedMessage}>{error}</h3>
        {doctors.filter(doctor => (
          featured.includes(doctor.name)
        )).map((doctor, ind) => (
          <DoctorCard
            key={doctor.name + doctor.specialty + ind.toString()}
            img={doctor.image}
            name={doctor.name}
            specialty={doctor.specialty}
            text={doctor.quote}
          />
        ))}

        <Card.Footer className="text-muted">
          Health Tracker©
          <a href="https://www.defoebrand.com"> DefoeBrand</a>
        </Card.Footer>
      </Card>
    </footer>
  );
};

Footer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      specialty: PropTypes.string,
      quote: PropTypes.string,
    }),
  ),
};

Footer.defaultProps = {
  doctors: [{
    name: '',
    image: '',
    specialty: '',
    quote: '',
  }],
};

export default connect(state => ({
  doctors: state.doctorReducer.doctors,
  user: state.userReducer.user,
}))(Footer);
