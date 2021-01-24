import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import DoctorCard from './DoctorCard';

const featured = ['Dr. Kim', 'Dr. Smith'];

const Footer = ({ doctors }) => (
  <footer className="Footer">
    <Card className="text-center">
      <Card.Header>Featured Doctors</Card.Header>

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

Footer.propTypes = {
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
  doctors: state.allDoctorsReducer.doctors,
  user: state.userReducer.user,
}))(Footer);
