import React from 'react';
import PropTypes from 'prop-types';

import {
  LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const LineRechartComponent = ({ chartData }) => {
  const data = [];

  chartData.forEach(entry => {
    Object.keys(entry).forEach(index => {
      if (index !== 'name') {
        data.push(index);
      }
    });
  });

  const dataPoints = data.filter((e, i) => data.indexOf(e) === i);

  const lineColors = ['#0095FF', '#ff0000'];

  return (
    <LineChart
      width={window.innerWidth - 50}
      height={250}
      data={chartData}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis type="number" domain={[dataMin => ((dataMin / 3) < 0 ? 0 : Math.floor(dataMin / 3)), dataMax => (dataMax + Math.ceil(dataMax * 0.25))]} />
      <Tooltip />
      <Legend margin={{ top: 15 }} verticalAlign="bottom" />
      {dataPoints.map((line, index) => (
        <Line
          type="monotone"
          key={line + index.toString()}
          dataKey={dataPoints[index]}
          stroke={lineColors[index % 2]}
        />
      )) }
    </LineChart>
  );
};

LineRechartComponent.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.shape()),
};

LineRechartComponent.defaultProps = {
  chartData: [],
};

export default LineRechartComponent;
