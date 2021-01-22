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
        <button type="button" onClick={handleClick} style={{ border: 'none', backgroundColor: 'inherit' }}>
          <Card.Body style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Card.Img
              variant="top"
              src={community.image}
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
              padding: 5,
              width: '64%',
              margin: '0 auto',
            }}
            >
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
