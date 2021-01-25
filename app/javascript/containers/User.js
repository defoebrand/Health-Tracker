import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import StatsCard from '../components/StatsCard';

import loadUserData from '../helpers/loadUserData';

const User = ({ user }) => {
  const history = useHistory();

  const charts = Object.keys(user).length !== 0 ? loadUserData(user) : [];

  return (
    <>
      <div className="welcomeBanner">
        <h1 style={{ whiteSpace: 'nowrap' }}>{`Hello ${user.name}!`}</h1>
        <img
          src="/images/blank-profile-pic.png"
          alt={`${user.name} profile pic`}
          style={{
            borderRadius: '50%', width: '10vw', minWidth: 100, margin: 10,
          }}
        />
        <Button
          variant="success"
          style={{
            whiteSpace: 'nowrap', height: 'auto', width: '20%', minWidth: 'max-content', padding: '10px',
          }}
          onClick={() => history.push({ pathname: '/new-stats', state: { user } })}
        >
          Add Stats
        </Button>
      </div>
      {charts.map(chart => <StatsCard key={chart.title} title={chart.title} data={chart.data} />)}

    </>
  );
};

User.propTypes = {
  user: PropTypes.shape(),
};

User.defaultProps = {
  user: {},
};

export default connect(state => ({
  user: state.userReducer.user,
}))(User);
