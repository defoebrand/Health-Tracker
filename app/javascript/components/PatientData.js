import React from 'react';
import { useLocation } from 'react-router-dom';
import StatsCard from './StatsCard';

import loadUserData from '../helpers/loadUserData';

// import PropTypes from 'prop-types';

// import Accordion from 'react-bootstrap/Accordion';
// import Card from 'react-bootstrap/Card';
//
// import LineRechartComponent from '../charts/line.rechart';

const PatientData = () => {
  const location = useLocation();
  console.log(location.state);
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

      <h1>{location.state.name}</h1>
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
// PatientData.propTypes = {
//   title: PropTypes.string,
//   data: PropTypes.arrayOf(PropTypes.shape()),
// };
//
// PatientData.defaultProps = {
//   title: '',
//   data: [{}],
// };

export default PatientData;
