import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import { loadUserData } from '../helpers/loadUser';

import StatChart from '../components/StatChart';

const User = ({ user }) => {
  const history = useHistory();

  const charts = Object.keys(user).length !== 0 ? loadUserData(user) : [];

  return (
    <>
      <div className="welcomeBanner">
        <h1 style={{ whiteSpace: 'nowrap' }}>{`Hello ${user.name}!`}</h1>
        <img src="http://www.messagescollection.com/wp-content/uploads/2015/04/cute-cat-profile-for-facebook.jpg" alt={`${user.name} profile pic`} style={{ borderRadius: '50%', width: '10vw', minWidth: 100 }} />
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
      {charts.map(chart => <StatChart key={chart.title} title={chart.title} data={chart.data} />)}

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
