import React from 'react';
import Card from 'react-bootstrap/Card';
import DoctorCard from './DoctorCard';
import Allcome from '../../assets/images/DrAllcome.jpg';
import Kim from '../../assets/images/DrKim.jpg';

const Footer = () => (
  <footer className="Footer">
    <Card className="text-center">
      <Card.Header>Featured Doctors</Card.Header>

      <DoctorCard img={Kim} name="Dr. Kim" speciality="Neurology" text={"'Wherever the art of Medicine is loved, there is also a love of Humanity.' ― Hippocrates"} />

      <DoctorCard img={Allcome} name="Dr. Allcome" speciality="Ophthamology" text={"'[Being a doctor] offers the most complete and constant union of those three qualities which have the greatest charm for pure and active minds – novelty, utility, and charity.' ― Sir James Paget (1814 - 1899)"} />

      <Card.Footer className="text-muted">
        Health Tracker©
        <a href="https://www.defoebrand.com"> DefoeBrand</a>
      </Card.Footer>
    </Card>
  </footer>
);

export default Footer;
