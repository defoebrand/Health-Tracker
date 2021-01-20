import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useHistory } from 'react-router-dom';
import { viewTab } from '../redux/actions';

const Community = ({ dispatch, community }) => {
  const history = useHistory();
  const handleClick = event => {
    dispatch(viewTab(event.target.dataset.rbEventKey));
    history.push('/friends');
  };
  const members = ['Me', 'You', 'That other guy'];
  return (
    <>
      <Tabs
        defaultActiveKey=""
        transition={false}
        id="noanim-tab-example"
        style={{
          display: 'flex', justifyContent: 'center', marginTop: 15, flexWrap: 'nowrap',
        }}
        onClick={handleClick}
      >
        <Tab eventKey="friends" title="My Friends" />
        <Tab eventKey="myCommunities" title="My Communities" />
        <Tab eventKey="communities" title="All Communities" />
      </Tabs>
      <div style={{
        margin: '25px auto', width: '85vw', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',
      }}
      >
        <h1>{community}</h1>
        <div style={{ border: '1px solid black', padding: 25 }}>
          <h2>Members:</h2>
          <hr />
          {members.map(member => (
            <p key={member}>{member}</p>
          ))}
        </div>
      </div>
    </>
  );
};

Community.propTypes = {
  dispatch: PropTypes.func.isRequired,
  community: PropTypes.string,
};

Community.defaultProps = {
  community: '',
};

export default connect(state => ({
  community: state.communityReducer.community,
}))(Community);
