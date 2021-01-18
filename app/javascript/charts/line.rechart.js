import React from 'react';
import {
  LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import PropTypes from 'prop-types';

const LineRechartComponent = ({ chartData, bpChartData }) => {
  const data = [];
  const bpSysData = [];
  const bpDiaData = [];
  let bpSysDataPoints;
  let bpDiaDataPoints;
  chartData.forEach(entry => data.push(Object.keys(entry)[1]));
  const dataPoints = data.filter((e, i) => data.indexOf(e) === i);

  if (bpChartData.length !== 0) {
    bpChartData.forEach(entry => {
      bpSysData.push(Object.keys(entry)[1]);
      bpDiaData.push(Object.keys(entry)[2]);
    });
    bpSysDataPoints = bpSysData.filter((e, i) => bpSysData.indexOf(e) === i);
    bpDiaDataPoints = bpDiaData.filter((e, i) => bpDiaData.indexOf(e) === i);
  }
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
      <YAxis />
      <Tooltip />
      <Legend />
      {bpChartData.length === 0
        ? dataPoints.map((line, index) => (
          <Line type="monotone" key={line} dataKey={dataPoints[index]} stroke="#0095FF" />
        )) : null }

      { bpSysData[0] !== undefined
        ? bpSysDataPoints.map(line => (
          <Line type="monotone" key={`${line}systolic`} dataKey="systolic" stroke="#0095FF" />))
        : null }
      { bpDiaData[0] !== undefined
        ? bpDiaDataPoints.map(line => (
          <Line type="monotone" key={`${line}diastolic`} dataKey="diastolic" stroke="#ff0000" />))
        : null }
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
