import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const DoctorCard = ({
  img, name, text, specialty,
}) => (
  <Card style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
    <Card.Img
      variant="top"
      src={img}
      style={{
        width: '34%', minWidth: 250, height: 'auto', maxHeight: '275px', objectFit: 'contain', margin: '10px auto',
      }}
    />
    <Card.Body style={{
      width: '64%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <Card.Title>{`${name} - ${specialty}`}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Button style={{ width: 'max-content' }} variant="primary">Schedule a Constulation</Button>
    </Card.Body>
  </Card>
);
DoctorCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  specialty: PropTypes.string,
};
DoctorCard.defaultProps = {
  img: '',
  name: '',
  text: '',
  specialty: '',
};
export default DoctorCard;
