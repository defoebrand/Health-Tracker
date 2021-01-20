import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import DoctorCard from './DoctorCard';

import doctors from '../data/doctors';

const myDocs = ['Dr. Gregory House', 'Dr. Kim', 'Dr. Hannibal Lecter'];

const Doctor = () => (
  <>
    <Tabs defaultActiveKey="personal" transition={false} id="noanim-tab-example" style={{ display: 'flex', justifyContent: 'center', marginTop: 15 }}>
      <Tab eventKey="personal" title="My Doctors">
        {doctors.filter(doctor => (
          myDocs.includes(doctor.name)
        )).map((doctor, ind) => (
          <DoctorCard
            key={doctor.name + doctor.specialty + ind.toString()}
            img={doctor.img}
            name={doctor.name}
            specialty={doctor.specialty}
            text={doctor.text}
          />
        ))}
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
