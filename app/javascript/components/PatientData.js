import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { useLocation } from 'react-router-dom';

import StatsCard from './StatsCard';

import loadUserData from '../helpers/loadUserData';

import {
  updateUser,
} from '../redux/actions';

const PatientData = ({ dispatch }) => {
  const location = useLocation();
  dispatch(updateUser({ user: location.state }));
  const charts = loadUserData({
    id: location.state.id,
    name: location.state.name,
    email: location.state.email,
    age: location.state.age,
    dob: location.state.dob,
    bloodSugar: JSON.parse(location.state.blood_sugar),
    diastolic: JSON.parse(location.state.diastolic),
    height: JSON.parse(location.state.height),
    pulse: JSON.parse(location.state.pulse),
    systolic: JSON.parse(location.state.systolic),
    temperature: JSON.parse(location.state.temperature),
    weight: JSON.parse(location.state.weight),
  });
  return (
    <>

      <h1 style={{ paddingLeft: 20 }}>{location.state.name}</h1>
      {charts.map(chart => (
        <StatsCard
          key={chart.title}
          title={chart.title}
          data={chart.data}
        />
      ))}
    </>
  );
};

PatientData.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

PatientData.defaultProps = {
  user: {
    id: 0,
    name: '',
  },
};

export default connect(state => ({
  user: state.userReducer.user,
}))(PatientData);
