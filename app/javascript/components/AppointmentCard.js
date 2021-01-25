import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const AppointmentCard = ({
  appt, handleClick,
}) => {
  const timeString = appt.time.split('T')[1].split(':').splice(0, 2).join(':');
  return (
    <>
      <Card style={{ marginBottom: 20 }}>
        <Card.Header>
          <small className="text-muted">{`${appt.date} - ${timeString}`}</small>
        </Card.Header>
        <Card.Body style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Card.Img
            variant="top"
            src={appt.doctor.image}
            style={{
              width: 250, height: 'auto', maxHeight: '275px', objectFit: 'contain', margin: '10px auto',
            }}
          />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: 10,
            margin: '0 auto',
          }}
          >
            <Card.Title>{appt.doctor.name}</Card.Title>
            <Card.Text style={{ maxWidth: 250 }}>{appt.notes}</Card.Text>
          </div>
        </Card.Body>
        <Button style={{ width: 'max-content', alignSelf: 'center', marginBottom: 15 }} variant="danger" onClick={() => handleClick(appt)}>Cancel</Button>
      </Card>

    </>
  );
};

AppointmentCard.propTypes = {
  appt: PropTypes.arrayOf(
    PropTypes.shape(),
  ),
  handleClick: PropTypes.func.isRequired,
};

AppointmentCard.defaultProps = {
  appt: [],
};

export default AppointmentCard;
