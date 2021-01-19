import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { viewCommunity } from '../redux/actions';

const CommunityLink = ({ dispatch, community }) => {
  const history = useHistory();
  const handleClick = () => {
    dispatch(viewCommunity(community));
    history.push(`/communities/${community}`);
  };

  return (
    <button type="button" onClick={handleClick} style={{ border: 'none', backgroundColor: 'inherit' }}>{community}</button>
  );
};

CommunityLink.propTypes = {
  dispatch: PropTypes.func.isRequired,
  community: PropTypes.string,
};

CommunityLink.defaultProps = {
  community: '',
};

export default connect(null)(CommunityLink);
