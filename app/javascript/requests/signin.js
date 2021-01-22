import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { updateUser } from '../redux/actions';

const signin = async ({ user, memory, dispatch }) => {
  const history = useHistory();
  const url = '/user/login';
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({ user }),
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
      if (memory === true) {
        localStorage.token = data.token;
      } else {
        sessionStorage.token = data.token;
      }
      dispatch(updateUser(data.user));
      history.replace('/');
    }).catch(err => console.log(err));
};

signin.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => ({
  user: state.userReducer.user,
}))(signin);
