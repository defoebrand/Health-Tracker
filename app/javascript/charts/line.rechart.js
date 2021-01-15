import React from 'react';
import {
  LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import PropTypes from 'prop-types';

const LineRechartComponent = ({ pulse }) => {
  const data = [];
  pulse.forEach(entry => data.push(Object.keys(entry)[1]));
  const dataPoints = data.filter((e, i) => data.indexOf(e) === i);
  return (
    <LineChart
      width={730}
      height={250}
      data={pulse}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey={dataPoints[0]} stroke="#0095FF" />
      <Line type="monotone" dataKey={dataPoints[1]} stroke="#FF0000" />
    </LineChart>
  );
};

LineRechartComponent.propTypes = {
  pulse: PropTypes.arrayOf(PropTypes.shape()),
};

LineRechartComponent.defaultProps = {
  pulse: [],
};

export default LineRechartComponent;
