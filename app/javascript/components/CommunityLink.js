import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { viewCommunity } from '../redux/actions';

const CommunityLink = ({ dispatch, community }) => {
  const history = useHistory();
  const handleClick = () => {
    dispatch(viewCommunity(community));
    history.push(`/communities/${community}`);
  };

  return (
    <>
      <Card>
        <Card.Header>
          <small className="text-muted">{`Active Members: ${Math.random() * 100}`}</small>
        </Card.Header>
        <Card.Body style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Card.Img variant="top" src="holder.js/100px160" style={{ width: '25vmin' }} />
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: 15,
          }}
          >
            <Card.Title>
              <button type="button" onClick={handleClick} style={{ border: 'none', backgroundColor: 'inherit' }}>{community}</button>
            </Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </div>
        </Card.Body>
      </Card>

    </>
  );
};

CommunityLink.propTypes = {
  dispatch: PropTypes.func.isRequired,
  community: PropTypes.string,
};

CommunityLink.defaultProps = {
  community: '',
};

export default connect(null)(CommunityLink);
