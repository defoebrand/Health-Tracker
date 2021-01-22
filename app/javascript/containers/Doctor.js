import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import DoctorCard from '../components/DoctorCard';

import { myDoctors } from '../redux/actions';

const Doctor = ({
  doctors, myDocs, user, dispatch,
}) => {
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

  return (
    <>
      <Tabs defaultActiveKey={user.name === '' ? 'all' : 'personal'} transition={false} id="noanim-tab-example" style={{ display: 'flex', justifyContent: 'center', marginTop: 15 }}>
        <Tab eventKey="personal" title="My Doctors">
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
};

Doctor.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
  myDocs: [],
  user: {
    id: 0,
    name: '',
  },
};

export default connect(state => ({
  doctors: state.allDoctorsReducer.doctors,
  myDocs: state.myDoctorsReducer.myDocs,
  user: state.userReducer.user,
}))(Doctor);
