import React from 'react';
import PropTypes from 'prop-types';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import LineRechartComponent from '../charts/line.rechart';

const StatsCard = ({ title, data, colors }) => (
  <Accordion>
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        <h3>{title}</h3>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <LineRechartComponent chartData={data} colors={colors} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);
StatsCard.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape()),
  colors: PropTypes.arrayOf(PropTypes.string),
};

StatsCard.defaultProps = {
  title: '',
  data: [{}],
  colors: [],
};

export default StatsCard;
