import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import DoctorCard from './DoctorCard';

import doctors from '../data/doctors';

import Allcome from '../../assets/images/dr-allcome.png';
import Kim from '../../assets/images/DrKim.jpg';

const Doctor = () => (
  <>
    <Tabs defaultActiveKey="personal" transition={false} id="noanim-tab-example" style={{ display: 'flex', justifyContent: 'center', marginTop: 15 }}>
      <Tab eventKey="personal" title="My Doctors">
        <DoctorCard img={Kim} name="Dr. Kim" speciality="Neurology" text={"'Wherever the art of Medicine is loved, there is also a love of Humanity.' ― Hippocrates"} />
        <DoctorCard img={Kim} name="Dr. Kim" speciality="Neurology" text={"'Wherever the art of Medicine is loved, there is also a love of Humanity.' ― Hippocrates"} />

        <DoctorCard img={Allcome} name="Dr. Allcome" speciality="Ophthamology" text={"'[Being a doctor] offers the most complete and constant union of those three qualities which have the greatest charm for pure and active minds – novelty, utility, and charity.' ― Sir James Paget (1814 - 1899)"} />

        <DoctorCard img={Kim} name="Dr. Kim" speciality="Neurology" text={"'Wherever the art of Medicine is loved, there is also a love of Humanity.' ― Hippocrates"} />

        <DoctorCard img={Allcome} name="Dr. Allcome" speciality="Ophthamology" text={"'[Being a doctor] offers the most complete and constant union of those three qualities which have the greatest charm for pure and active minds – novelty, utility, and charity.' ― Sir James Paget (1814 - 1899)"} />
      </Tab>
      <Tab eventKey="all" title="All Doctors">
        {doctors.map((doctor, ind) => (
          <DoctorCard
            key={doctor.name + doctor.specialty + ind.toString()}
            img={doctor.img}
            name={doctor.name}
            specialty={doctor.specialty}
            text={doctor.text}
          />
        ))}
      </Tab>
    </Tabs>

  </>
);

export default Doctor;
