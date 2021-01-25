import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { chooseDoctor } from '../redux/actions';

const DoctorCard = ({
  user, img, name, text, specialty, dispatch,
}) => {
  const history = useHistory();

  const handleClick = () => {
    dispatch(chooseDoctor(name));
    history.push(`/${name}/schedule-an-appointment`);
  };

  return (
    <Card className="doctorCard">
      <Card.Img
        variant="top"
        src={img}
        className="doctorCardImage"
      />
      <Card.Body className="doctorCardBody">
        <Card.Title>{`${name} - ${specialty}`}</Card.Title>
        <Card.Text style={{ textAlign: 'center' }}>{text}</Card.Text>
        {user.name && <Button style={{ width: 'max-content' }} variant="primary" onClick={handleClick}>Schedule a Consultation</Button>}
      </Card.Body>
    </Card>
  );
};
DoctorCard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
  img: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  specialty: PropTypes.string,
};
DoctorCard.defaultProps = {
  user: { name: '' },
  img: '',
  name: '',
  text: '',
  specialty: '',
};

export default connect(state => ({
  user: state.userReducer.user,
}))(DoctorCard);
