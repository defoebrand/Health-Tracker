import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const DoctorCard = ({
  img, name, text, speciality,
}) => (
  <Card style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
    <Card.Img
      variant="top"
      src={img}
      style={{
        width: '34%', minWidth: 250, height: 'auto', objectFit: 'contain', margin: '10px auto',
      }}
    />
    <Card.Body style={{ width: '64%' }}>
      <Card.Title>{`${name} - ${speciality}`}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Button variant="primary">Schedule a Constulation</Button>
    </Card.Body>
  </Card>
);
DoctorCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  speciality: PropTypes.string,
};
DoctorCard.defaultProps = {
  img: '',
  name: '',
  text: '',
  speciality: '',
};
export default DoctorCard;
