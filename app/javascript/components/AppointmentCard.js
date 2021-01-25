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
        <Card.Body className="appointmentBody flex-wrap">
          <div className="doctorCardImageContainer flex-center">
            <div className="cardImageCrop">
              <Card.Img
                variant="top"
                src={appt.doctor.image}
                className="doctorCardImage"
              />
            </div>
          </div>
          <div className="appointmentText flex-down text-center">
            <Card.Title>{appt.doctor.name}</Card.Title>
            <Card.Text style={{ maxWidth: 250 }}>{appt.notes}</Card.Text>
          </div>
        </Card.Body>
        <Button className="appointmentButton" variant="danger" onClick={() => handleClick(appt)}>Cancel</Button>
      </Card>

    </>
  );
};

AppointmentCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  appt: PropTypes.shape(),
};

AppointmentCard.defaultProps = {
  appt: [],
};

export default AppointmentCard;
