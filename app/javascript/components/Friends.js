import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import CardGroup from 'react-bootstrap/CardGroup';
import CommunityLink from './CommunityLink';

// import DoctorCard from './DoctorCard';

import communities from '../data/communities';

// const friends = [];

const myCommunities = ['Diabetes', 'Pregnancy', 'Migraine'];

const Friends = ({ tab }) => (
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
            myCommunities.includes(community.name)
          )).map(community => (
            <CommunityLink key={community} community={community} />
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
          <CommunityLink key={community} community={community} />
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

Friends.propTypes = {
  tab: PropTypes.string,
};

Friends.defaultProps = {
  tab: 'myCommunities',
};

export default connect(state => ({
  tab: state.tabReducer.tab,
}))(Friends);
