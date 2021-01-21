import React from 'react';
import {
  LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import PropTypes from 'prop-types';

const LineRechartComponent = ({ chartData, bpChartData }) => {
  const data = [];
  const bpData = [];
  let bpDataPoints;
  chartData.forEach(entry => {
    data.push(Object.keys(entry)[1]);
    data.push(Object.keys(entry)[2]);
  });
  const dataPoints = data.filter((e, i) => data.indexOf(e) === i);
  if (bpChartData.length !== 0) {
    bpChartData.forEach(entry => {
      bpData.push(Object.keys(entry)[1]);
      bpData.push(Object.keys(entry)[2]);
      bpData.push(Object.keys(entry)[3]);
      bpData.push(Object.keys(entry)[4]);
    });
    bpDataPoints = bpData.filter((e, i) => bpData.indexOf(e) === i);
  }
  // const lineColors = ['#0095FF', '#ff0000'];
  const lineColors = ['#ff3ee0', '#1b7400'];
  return (
    <LineChart
      width={window.innerWidth - 50}
      height={250}
      data={bpChartData.length === 0 ? chartData : bpChartData}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis type="number" domain={[dataMin => ((dataMin / 3) < 0 ? 0 : Math.floor(dataMin / 3)), dataMax => (dataMax + Math.ceil(dataMax * 0.25))]} />
      <Tooltip />
      <Legend margin={{ top: 15 }} verticalAlign="bottom" />
      {bpChartData.length === 0
        ? dataPoints.map((line, index) => (
          <Line type="monotone" key={line + index.toString()} dataKey={dataPoints[index]} stroke={lineColors[index]} />
        )) : bpDataPoints.map((line, index) => (
          <Line type="monotone" key={line + index.toString()} dataKey={bpDataPoints[index]} stroke={lineColors[index % 2]} />)) }

    </LineChart>
  );
};

LineRechartComponent.propTypes = {
  chartData: PropTypes.arrayOf(PropTypes.shape()),
  bpChartData: PropTypes.arrayOf(PropTypes.shape()),
};

LineRechartComponent.defaultProps = {
  chartData: [],
  bpChartData: [],
};

export default LineRechartComponent;
