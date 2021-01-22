import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import DoctorCard from './DoctorCard';

// const myDocs = ['Dr. Gregory House', 'Dr. Who', 'Dr. Hannibal Lecter'];

const Doctor = ({ doctors, myDocs }) => (
  <>
    <Tabs defaultActiveKey="personal" transition={false} id="noanim-tab-example" style={{ display: 'flex', justifyContent: 'center', marginTop: 15 }}>
      <Tab eventKey="personal" title="My Doctors">
        {console.log(myDocs)}
        {doctors.filter(doctor => (
          myDocs.includes(doctor.name)
        )).map((doctor, ind) => (
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
    </Tabs>

  </>
);

Doctor.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      specialty: PropTypes.string,
      quote: PropTypes.string,
    }),
  ),
  myDocs: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

Doctor.defaultProps = {
  doctors: [{
    name: '',
    image: '',
    specialty: '',
    quote: '',
  }],
  myDocs: [],
};

export default connect(state => ({
  doctors: state.allDoctorsReducer.doctors,
  myDocs: state.myDoctorsReducer.myDocs,
}))(Doctor);
