import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

import { viewCommunity } from '../redux/actions';

const CommunityCard = ({ dispatch, community }) => {
  const history = useHistory();

  const handleClick = () => {
    dispatch(viewCommunity(community.name));
    history.push(`/communities/${community.name}`);
  };

  return (
    <>
      <Card>
        <Card.Header>
          <small className="text-muted">{`Active Members: ${Math.round(Math.random() * 100)}`}</small>
        </Card.Header>
        <button type="button" onClick={handleClick} className="eraseButtonStyle">
          <Card.Body className="communityCardBody flex-wrap">
            <Card.Img
              variant="top"
              src={community.image}
              className="communityCardImage"
            />
            <div className="communityCardText flex-down">
              <Card.Title>{community.name}</Card.Title>
              <Card.Text>{community.description}</Card.Text>
            </div>
          </Card.Body>
        </button>
      </Card>

    </>
  );
};

CommunityCard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  community: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
};

CommunityCard.defaultProps = {
  community: {
    name: '',
    image: '',
    description: '',
  },
};

export default connect(null)(CommunityCard);
