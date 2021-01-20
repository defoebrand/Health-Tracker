import React from 'react';
import Card from 'react-bootstrap/Card';
import DoctorCard from './DoctorCard';

import doctors from '../data/doctors';

const featured = ['Dr. Kim', 'Dr. Smith'];

const Footer = () => (
  <footer className="Footer">
    <Card className="text-center">
      <Card.Header>Featured Doctors</Card.Header>

      {doctors.filter(doctor => (
        featured.includes(doctor.name)
      )).map((doctor, ind) => (
        <DoctorCard
          key={doctor.name + doctor.specialty + ind.toString()}
          img={doctor.img}
          name={doctor.name}
          specialty={doctor.specialty}
          text={doctor.text}
        />
      ))}

      <Card.Footer className="text-muted">
        Health Tracker©
        <a href="https://www.defoebrand.com"> DefoeBrand</a>
      </Card.Footer>
    </Card>
  </footer>
);

export default Footer;
