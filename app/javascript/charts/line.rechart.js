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
      width={window.innerWidth - 50}
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
      {dataPoints.map((line, index) => (<Line type="monotone" key={line} dataKey={dataPoints[index]} stroke="#0095FF" />))}
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
