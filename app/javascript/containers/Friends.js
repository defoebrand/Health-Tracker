import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CardGroup from 'react-bootstrap/CardGroup';

import CommunityCard from '../components/CommunityCard';

import { allCommunities } from '../redux/actions';

const fetch = require('node-fetch');

const Friends = ({
  tab, communities, user, dispatch,
}) => {
  const [myCommunities, setCommunities] = useState([]);
  const [failedMessage, setFailedMessage] = useState('noMessage');
  const [error, setError] = useState('');

  const token = localStorage.token === ''
    ? sessionStorage.token
    : localStorage.token;

  useEffect(() => {
    const url = '/communities';
    fetch(url, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Failed to Retrieve Communities.');
      }).then(data => {
        try {
          dispatch(allCommunities(data));
        } catch {
          throw new Error('Failed to Retrieve Communities.');
        }
      }).catch(err => {
        setError(err.message);
        setFailedMessage('displayMessage');
      });
  }, []);

  useEffect(() => {
    if (user.name !== '') {
      const url = '/user_communities';
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({ user: { id: user.id } }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network Response Failed.');
        }).then(data => {
          try {
            setCommunities(data);
          } catch {
            throw new Error('Failed to Retrieve Your Communities.');
          }
        }).catch(err => {
          setError(err.message);
          setFailedMessage('displayMessage');
        });
    }
  }, []);

  return (
    <>
      <h3 className={failedMessage}>{error}</h3>
      <Tabs
        defaultActiveKey={user.name === '' ? 'communities' : tab}
        transition={false}
        id="noanim-tab-example"
      >
        <Tab eventKey="friends" title="My Friends">
          <h2 className="placeHolderText text-center">Chat with Friends! - coming soon - </h2>
        </Tab>
        <Tab eventKey="myCommunities" title="My Communities">
          <CardGroup style={{ flexDirection: 'column' }}>
            {communities.filter(community => (
              myCommunities.some(comm => (
                community.name === comm.name)))).map(community => (
                  <CommunityCard key={community.name} community={community} />
            ))}
          </CardGroup>
        </Tab>
        <Tab eventKey="communities" title="All Communities">
          {communities.map(community => (
            <CommunityCard key={community.name} community={community} />
          ))}
        </Tab>
      </Tabs>

    </>
  );
};

Friends.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tab: PropTypes.string,
  communities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

Friends.defaultProps = {
  tab: 'myCommunities',
  communities: [{
    id: 0,
    name: '',
    image: '',
  }],
  user: {
    id: 0,
    name: '',
  },
};

export default connect(state => ({
  tab: state.tabReducer.tab,
  communities: state.allCommunitiesReducer.communities,
  user: state.userReducer.user,
}))(Friends);
