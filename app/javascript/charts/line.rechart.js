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
  // console.log('bpChartData', bpChartData);
  chartData.forEach(entry => data.push(Object.keys(entry)[1]));
  const dataPoints = data.filter((e, i) => data.indexOf(e) === i);
  if (bpChartData.length !== 0) {
    bpChartData.forEach(entry => {
      // console.log('entry', entry);
      if (Object.keys(entry)[1] === 'systolic') {
        bpSysData.push(Object.keys(entry)[1]);
      } else {
        bpDiaData.push(Object.keys(entry)[1]);
      }
    });
    bpSysDataPoints = bpSysData.filter((e, i) => bpSysData.indexOf(e) === i);

    // bpChartData.forEach(entry => bpDiaData.push(Object.keys(entry)[1]));
    bpDiaDataPoints = bpDiaData.filter((e, i) => bpDiaData.indexOf(e) === i);

    // console.log('bpChartData', bpChartData[0].systolic);

    // console.log('bpChartData', bpChartData);
    // console.log('bpSysDataPoints', bpSysDataPoints);
    // console.log('bpDiaDataPoints', bpDiaDataPoints);

    // console.log('bpDiaDataPoints', bpDiaDataPoints);
    // Object.keys(bpChartData).forEach(entry => bpSysData.push(Object.keys(bpChartData[entry])));
    // bpChartData[0][bpSysData[0]].forEach(entry => newSysArray.push(Object.keys(entry)[1]));
    // bpSysDataPoints = bpSysData.filter((e, i) => bpSysData.indexOf(e) === i);
    //
    // Object.keys(bpChartData).forEach(entry =>
    // bpDiaData.push(Object.keys(bpChartData[entry])[0]));
    // bpDiaDataPoints = bpDiaData.filter((e, i) => bpDiaData.indexOf(e) === i);
  } else {
    // console.log('chartData', chartData);
  }
  // console.log('dataPoints', dataPoints);

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

      { bpChartData.length !== 0
        ? bpSysDataPoints.map(line => (
          <Line type="monotone" key={line} dataKey="systolic" stroke="#0095FF" />))
        : null }
      { bpChartData.length !== 0
        ? bpDiaDataPoints.map(line => (
          <Line type="monotone" key={line} dataKey="diastolic" stroke="#ff0000" />))
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
