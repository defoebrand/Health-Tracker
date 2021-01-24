import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CardGroup from 'react-bootstrap/CardGroup';

import CommunityCard from '../components/CommunityCard';

const fetch = require('node-fetch');

const Friends = ({ tab, communities, user }) => {
  const [myCommunities, setCommunities] = useState([]);
  const [failedMessage, setFailedMessage] = useState({ display: 'none' });
  const [error, setError] = useState('');

  const displayMessage = {
    display: 'block',
    textAlign: 'center',
    marginTop: 10,
  };

  useEffect(() => {
    const url = '/user/user-communities';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ user: { id: user.id } }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      }).then(data => {
        try {
          setCommunities(data);
        } catch {
          throw new Error('Failed to Retrieve Your Communities.');
        }
      }).catch(err => {
        setError(err.message);
        setFailedMessage(displayMessage);
      });
  }, []);

  return (
    <>
      <h3 style={failedMessage}>{error}</h3>
      <Tabs
        defaultActiveKey={user.name === '' ? 'communities' : tab}
        transition={false}
        id="noanim-tab-example"
        style={{
          display: 'flex', justifyContent: 'center', marginTop: 15, flexWrap: 'nowrap',
        }}
      >
        <Tab eventKey="friends" title="My Friends">
          <h2 style={{ margin: '15px auto', whiteSpace: 'wrap', textAlign: 'center' }}>Chat with Friends! - coming soon - </h2>
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
