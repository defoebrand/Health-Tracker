import React, { useState } from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import UserRegister from './UserRegister';
import DrRegister from './DrRegister';

const Register = () => {
  const [form, setForm] = useState('user');

  const changeStatus = () => {
    const registrationForm = form === 'user' ? 'dr' : 'user';
    setForm(registrationForm);
  };

  return (
    <>
      <Form className="formBox">
        <Form.Check
          type="switch"
          id="custom-switch"
          label="I am a Doctor"
          onChange={changeStatus}
        />
      </Form>
      <h5 className="formHeader">All Fields Must Be Filled In</h5>
      {form === 'user' ? <UserRegister /> : <DrRegister />}

    </>
  );
};

export default connect(null)(Register);
