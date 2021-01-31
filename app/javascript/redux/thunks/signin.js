const signInThunk = (status, email, password, memory, updateUser, history) => {
  const signInUser = dispatch => {
    const url = status === false ? '/sessions' : '/user/doctor';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network Response Failed.');
      }).then(({ token, user }) => {
        if (memory === true) {
          localStorage.token = token;
        } else {
          sessionStorage.token = token;
        }
        try {
          dispatch(updateUser(user));
        } catch {
          throw new Error('Failed Login. Please Try Again');
        }
        history.replace('/');
      }).catch(err => {
        console.log(err);
      // setError(err.message);
      // setFailedMessage('displayMessage');
      });
  };
  return signInUser;
};

export default signInThunk;
