import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import CardGroup from 'react-bootstrap/CardGroup';
import CommunityLink from './CommunityLink';

const Friends = ({ tab, communities, user }) => {
  const [myCommunities, setCommunities] = useState([]);
  useEffect(() => {
    // const url = 'http://localhost:3000/user';
    // const url = 'https://obscure-island-28750.herokuapp.com/user';
    const url = '/user/user-communities';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: { id: user.id },
      }),
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
        setCommunities(data);
      }).catch(err => console.log(err));
  }, []);
  return (
    <>
      <Tabs
        defaultActiveKey={tab}
        transition={false}
        id="noanim-tab-example"
        style={{
          display: 'flex', justifyContent: 'center', marginTop: 15, flexWrap: 'nowrap',
        }}
      >
        <Tab eventKey="friends" title="My Friends">
          {/* communities.filter(doctor => (
          myCommunities.includes(doctor.name)
        )).map((doctor, ind) => (
          <DoctorCard
            key={doctor.name + doctor.specialty + ind.toString()}
            img={doctor.img}
            name={doctor.name}
            specialty={doctor.specialty}
            text={doctor.text}
          />
        )) */}
        </Tab>
        <Tab eventKey="myCommunities" title="My Communities">
          <CardGroup style={{ flexDirection: 'column' }}>
            {communities.filter(community => (
              myCommunities.some(comm => (
                community.name === comm.name)))).map(community => (
                  <CommunityLink key={community.name} community={community} />
            ))}
          </CardGroup>
          {/* communities.map((doctor, ind) => (
          <DoctorCard
            key={doctor.name + doctor.specialty + ind.toString()}
            img={doctor.img}
            name={doctor.name}
            specialty={doctor.specialty}
            text={doctor.text}
          />
        )) */}
        </Tab>
        <Tab eventKey="communities" title="All Communities">
          {communities.map(community => (
            <CommunityLink key={community.name} community={community} />
          ))}
          {/* communities.map((doctor, ind) => (
          <DoctorCard
            key={doctor.name + doctor.specialty + ind.toString()}
            img={doctor.img}
            name={doctor.name}
            specialty={doctor.specialty}
            text={doctor.text}
          />
        )) */}
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
  },
};

export default connect(state => ({
  tab: state.tabReducer.tab,
  communities: state.allCommunitiesReducer.communities,
  user: state.userReducer.user,
}))(Friends);
