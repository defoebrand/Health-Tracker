import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import StatsCard from '../components/StatsCard';

import loadUserData from '../helpers/loadUserData';

const User = ({ user }) => {
  const history = useHistory();
  const [colors, setColors] = useState(['#0095FF', '#ff0000']);

  const changeColors = e => {
    if (e.target.id === 'baseline') {
      setColors([colors[0], e.target.value]);
    } else {
      setColors([e.target.value, colors[1]]);
    }
  };

  const charts = Object.keys(user).length !== 0 ? loadUserData(user) : [];

  return (
    <>
      <div className="welcomeBanner flex-center">
        <h1 style={{ whiteSpace: 'nowrap' }}>{`Hello ${user.name}!`}</h1>
        <img
          src="/images/blank-profile-pic.png"
          alt={`${user.name} profile pic`}
          className="userImage"
        />
        <Button
          variant="success"
          className="userButton"
          onClick={() => history.push({ pathname: '/new-stats', state: { user } })}
        >
          Add Stats
        </Button>
      </div>
      <fieldset className="colorPicker flex-center text-center flex-wrap">
        <div className="flex">
          <p>Base Line Color</p>
          <input type="color" id="baseline" name="favcolor" value={colors[1]} onChange={changeColors} />
        </div>
        <div className="flex">
          <p>My Line Color</p>
          <input type="color" id="userline" name="favcolor" value={colors[0]} onChange={changeColors} />
        </div>
      </fieldset>

      {charts.map(chart => (
        <StatsCard
          key={chart.title}
          title={chart.title}
          data={chart.data}
          colors={colors}
        />
      ))}

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
