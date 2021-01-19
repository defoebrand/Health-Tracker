import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CommunityLink from './CommunityLink';
// import DoctorCard from './DoctorCard';

import communities from '../data/communities';

// const friends = [];

const myCommunities = ['Diabetes', 'Pregnancy', 'Migraine'];

const Friends = () => (
  <>
    <Tabs defaultActiveKey="myCommunities" transition={false} id="noanim-tab-example" style={{ display: 'flex', justifyContent: 'center', marginTop: 15 }}>
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
        {communities.filter(community => (
          myCommunities.includes(community)
        )).map(community => (
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

export default Friends;
