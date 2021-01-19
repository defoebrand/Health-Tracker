import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Community = ({ community }) => (
  <>
    <h1>{community}</h1>
    <p>Hello</p>
  </>
);

Community.propTypes = {
  community: PropTypes.string,
};

Community.defaultProps = {
  community: '',
};

export default connect(state => ({
  community: state.communityReducer.community,
}))(Community);
