import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';

import { viewFriendsTab } from '../redux/actions';

import { getCommunityMembers, adjustMembership } from '../redux/thunks/communities';

const Community = ({ dispatch, community, user }) => {
  const history = useHistory();
  const [members, setMembers] = useState([]);
  const [failedMessage, setFailedMessage] = useState('noMessage');
  const [error, setError] = useState('');

  const token = localStorage.token === ''
    ? sessionStorage.token
    : localStorage.token;

  useEffect(() => {
    dispatch(getCommunityMembers(community)).then(data => {
      try {
        setMembers(data);
      } catch {
        throw new Error('Failed to Retrieve Communities.');
      }
    }).catch(err => {
      setError(err.message);
      setFailedMessage('displayMessage');
    });
  }, []);

  const changeCommunityMembership = errorMessage => {
    dispatch(adjustMembership(community, token)).then(data => {
      try {
        setMembers(data);
      } catch {
        throw new Error(errorMessage);
      }
    }).catch(err => {
      setError(err.message);
      setFailedMessage('displayMessage');
    });
  };

  const addCommunity = () => {
    changeCommunityMembership('Failed to Join Community.');
  };

  const removeCommunity = () => {
    changeCommunityMembership('Failed to Leave Community.');
  };

  const handleClick = event => {
    dispatch(viewFriendsTab(event.target.dataset.rbEventKey));
    history.push('/friends');
  };

  const joinButton = name => (
    name !== ''
      ? <Button variant="info" onClick={addCommunity}>Join Community</Button>
      : null
  );

  return (
    <>
      <h3 className={failedMessage}>{error}</h3>
      <Tabs
        defaultActiveKey=""
        transition={false}
        id="noanim-tab-example"
        onClick={handleClick}
      >
        <Tab eventKey="friends" title="My Friends" />
        <Tab eventKey="myCommunities" title="My Communities" />
        <Tab eventKey="communities" title="All Communities" />
      </Tabs>
      <div className="viewContainer flex-down">
        <span className="viewBox flex-down">
          <h1>{community.name}</h1>
          <span>
            {members.some(member => member.name === user.name)
              ? <Button variant="info" onClick={removeCommunity}>Leave Community</Button>
              : joinButton(user.name)}
          </span>
        </span>
        <div style={{ border: '1px solid black', padding: 25 }}>
          <h2>Members:</h2>
          <hr />
          {members.map(member => (
            <p key={member.id}>{member.name}</p>
          ))}
        </div>
      </div>
    </>
  );
};

Community.propTypes = {
  dispatch: PropTypes.func.isRequired,
  community: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

Community.defaultProps = {
  community: {
    id: 0,
    name: '',
  },
  user: {
    id: 0,
    name: '',
  },
};

export default connect(state => ({
  community: state.communityReducer.community,
  user: state.userReducer.user,
}))(Community);
