import React from 'react';
import PropTypes from 'prop-types';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import LineRechartComponent from '../charts/line.rechart';

const StatChart = ({ title, data, bp }) => {
  console.log(bp);
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <h3>{title}</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <LineRechartComponent chartData={data} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
StatChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape()),
  bp: PropTypes.string,
};

StatChart.defaultProps = {
  title: '',
  data: [{}],
  bp: '',
};

export default StatChart;
