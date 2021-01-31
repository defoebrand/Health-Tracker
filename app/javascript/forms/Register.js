import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { updateUser } from '../redux/actions';

const Register = ({ dispatch }) => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDOB] = useState('');
  const [ethnicity, setEthnicity] = useState([]);
  const [sex, setSex] = useState('XX');
  const [gender, setGender] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [scale, setScale] = useState('Metric');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [memory, setMemory] = useState(true);
  const [failedMessage, setFailedMessage] = useState('noMessage');
  const [error, setError] = useState('');

  const changeMemory = () => {
    setMemory(!memory);
  };

  const gotToSignIn = () => {
    history.push('/signin');
  };

  const changeName = e => {
    setName(e.target.value);
  };

  const changeEmail = e => {
    setEmail(e.target.value);
  };

  const changePassword = e => {
    setPassword(e.target.value);
  };

  const confirmPassword = e => {
    setConfirm(e.target.value);
  };

  const changeHeight = e => {
    const height = e.target.value === '' ? e.target.value : e.target.value / 100;
    setHeight(height);
  };

  const changeWeight = e => {
    setWeight(e.target.value);
  };

  const determineSex = () => {
    if (sex === 'XX') {
      setSex('XY');
    } else {
      setSex('XX');
    }
  };

  const determineScale = () => {
    if (scale === 'Metric') {
      setScale('Imperial');
    } else {
      setScale('Metric');
    }
  };

  const changeFeet = e => {
    setFeet(e.target.value);
  };

  const changeInches = e => {
    setInches(e.target.value);
  };

  useEffect(() => {
    if (scale === 'Imperial') {
      setHeight(((Number(feet) * 12) + Number(inches)).toString());
    }
  }, [feet, inches]);

  const changeGender = e => {
    setGender(e.target.value.toLowerCase());
  };

  const changeDate = e => {
    const birthdate = new Date(e.target.value);
    const cur = new Date();
    const years = Math.floor((cur - birthdate) / 31557600000);
    setDOB(birthdate);
    setAge(years);
  };

  const adjustEthnoGroup = e => {
    if (ethnicity.includes(e.target.id)) {
      setEthnicity(ethnicity.filter(group => group !== e.target.id));
    } else {
      setEthnicity([...ethnicity, e.target.id]);
    }
  };

  const date = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let time;
  if (date.getHours() >= 13) {
    time = `${date.getHours() - 12}p`;
  } else {
    time = `${date.getHours()}a`;
  }
  const dateTime = `${months[date.getMonth()]}${date.getDate()}-${time}`;

  const submitRegister = e => {
    const heightData = height === '' ? height : JSON.stringify({ height, scale });
    const weightData = weight === '' ? weight : JSON.stringify({ measurements: { [dateTime]: Number(weight) }, scale });
    if (password !== confirm) {
      setError('Passwords Do Not Match');
      setFailedMessage('displayMessage');
    } else {
      e.preventDefault();
      const url = '/users';
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          user: {
            name,
            email,
            password,
            dob,
            age,
            sex,
            gender,
            ethnicity: ethnicity.toString(),
            height: heightData,
            weight: weightData,
          },
        }),
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
            throw new Error('Failed to Register. Please try again.');
          }
          history.replace('/');
        }).catch(err => {
          setError(err.message);
          setFailedMessage('displayMessage');
        });
    }
  };
  return (
    <>
      <h3 className={failedMessage}>{error}</h3>
      <h5 className="formHeader">All Fields Must Be Filled In</h5>
      <Form className="formBox">
        <Form.Group controlId="formBasicUsername">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" placeholder="UserName" onChange={changeName} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={changeEmail} />
          <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={changePassword} />
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" onChange={confirmPassword} />
        </Form.Group>
        <Form.Group controlId="formBasicDOB">
          <Form.Label>{`DOB - Age: ${age}`}</Form.Label>
          <Form.Control type="date" placeholder="dob" onChange={changeDate} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Measurement System</Form.Label>
          <span className="flex">
            <Form.Check custom type="radio" name="scale" id="Metric" label="Centimeters / Kilograms" value="Metric" onChange={determineScale} defaultChecked />
            <Form.Check custom type="radio" name="scale" id="Imperial" label="Inches / Pounds" value="Imperial" onChange={determineScale} className="mar-L-10" />
          </span>
        </Form.Group>
        <Form.Group controlId="formBasicHeight">
          <Form.Label>Height</Form.Label>
          {scale === 'Metric'
            ? <Form.Control type="text" placeholder="Centimeters" onChange={changeHeight} />
            : (
              <span className="flex">
                <Form.Control type="text" placeholder="Feet" onChange={changeFeet} />
                <Form.Control type="text" placeholder="Inches" onChange={changeInches} />
              </span>
            )}
        </Form.Group>
        <Form.Group controlId="formBasicWeight">
          <Form.Label>Weight</Form.Label>
          <Form.Control type="text" placeholder={scale === 'Metric' ? 'Kilograms' : 'Pounds'} onChange={changeWeight} />
        </Form.Group>
        <Form.Group controlId="formBasicAncestry">
          <Form.Label>Predominant Ancestry</Form.Label>
          <Form.Check custom type="checkbox" id="European" label="European" onChange={adjustEthnoGroup} />
          <Form.Check custom type="checkbox" id="Central & South Asian" label="Central & South Asian" onChange={adjustEthnoGroup} />
          <Form.Check custom type="checkbox" id="East Asian & Native American" label="East Asian & Native American" onChange={adjustEthnoGroup} />
          <Form.Check custom type="checkbox" id="Sub-Saharan African" label="Sub-Saharan African" onChange={adjustEthnoGroup} />
          <Form.Check custom type="checkbox" id="Western Asian & North African" label="Western Asian & North African" onChange={adjustEthnoGroup} />
          <Form.Check custom type="checkbox" id="Melanesian" label="Melanesian" onChange={adjustEthnoGroup} />
        </Form.Group>
        <Form.Group controlId="formBasicSex">
          <Form.Label>Sex at birth</Form.Label>
          <span className="flex">
            <Form.Check custom type="radio" name="sex" id="XX" label="XX" value="XX" onChange={determineSex} defaultChecked />
            <Form.Check custom type="radio" name="sex" id="XY" label="XY" value="XY" onChange={determineSex} className="mar-L-10" />
          </span>
        </Form.Group>
        <Form.Group controlId="formBasicGender">
          <Form.Label>Preferred Gender</Form.Label>
          <Form.Control type="text" placeholder="Gender" onChange={changeGender} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" defaultChecked onChange={changeMemory} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitRegister}>
          Submit
        </Button>
        <Button
          variant="primary"
          type="signin"
          onClick={gotToSignIn}
          className="mar-L-15"
        >
          Sign In
        </Button>
      </Form>
    </>
  );
};

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Register);
