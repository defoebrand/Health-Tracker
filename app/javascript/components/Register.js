import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDOB] = useState('');
  const [ethnicity, setEthnicity] = useState([]);
  const [sex, setSex] = useState('XX');
  const [scale, setScale] = useState('Metric');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [memory, setMemory] = useState(true);

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
  // const changeAge = e => {
  //   setAge(e.target.value);
  // };
  const changeHeight = e => {
    setHeight(e.target.value);
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
  console.log(scale);
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
  const submitRegister = e => {
    if (password !== confirm) {
      alert("passwords don't match");
    } else {
      e.preventDefault();
      // const url = 'http://localhost:3000/user';
      // const url = 'https://obscure-island-28750.herokuapp.com/user';
      const url = '/user';
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          user: {
            name,
            email,
            password,
            dob,
            age,
            ethnicity: ethnicity.toString(),
            sex,
            height: JSON.stringify({ height, scale }),
            weight: JSON.stringify({ weight, scale }),
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
          throw new Error('Network response was not ok.');
        }).then(data => {
          if (memory === true) {
            localStorage.token = data.token;
          } else {
            sessionStorage.token = data.token;
          }
          history.replace('/');
        }).catch(err => console.log(err));
    }
  };
  return (
    <Form className="SignInForm" style={{ width: '85vw', maxWidth: 500, margin: '25px auto' }}>
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
        <span style={{ display: 'flex' }}>
          <Form.Check custom type="radio" name="scale" id="Metric" label="Centimeters / Kilograms" value="Metric" onChange={determineScale} defaultChecked />
          <Form.Check custom type="radio" name="scale" id="Imperial" label="Inches / Pounds" value="Imperial" onChange={determineScale} style={{ marginLeft: 10 }} />
        </span>
      </Form.Group>
      <Form.Group controlId="formBasicHeight">
        <Form.Label>Height</Form.Label>
        <Form.Control type="text" placeholder="Height" onChange={changeHeight} />
      </Form.Group>
      <Form.Group controlId="formBasicWeight">
        <Form.Label>Weight</Form.Label>
        <Form.Control type="text" placeholder="Weight" onChange={changeWeight} />
      </Form.Group>
      <Form.Group controlId="formBasicWeight">
        <Form.Label>Predominant Ancestry</Form.Label>
        <Form.Check custom type="checkbox" id="European" label="European" onChange={adjustEthnoGroup} />
        <Form.Check custom type="checkbox" id="Central & South Asian" label="Central & South Asian" onChange={adjustEthnoGroup} />
        <Form.Check custom type="checkbox" id="East Asian & Native American" label="East Asian & Native American" onChange={adjustEthnoGroup} />
        <Form.Check custom type="checkbox" id="Sub-Saharan African" label="Sub-Saharan African" onChange={adjustEthnoGroup} />
        <Form.Check custom type="checkbox" id="Western Asian & North African" label="Western Asian & North African" onChange={adjustEthnoGroup} />
        <Form.Check custom type="checkbox" id="Melanesian" label="Melanesian" onChange={adjustEthnoGroup} />
      </Form.Group>
      <Form.Group controlId="formBasicWeight">
        <Form.Label>Sex</Form.Label>
        <span style={{ display: 'flex' }}>
          <Form.Check custom type="radio" name="sex" id="XX" label="XX" value="XX" onChange={determineSex} defaultChecked />
          <Form.Check custom type="radio" name="sex" id="XY" label="XY" value="XY" onChange={determineSex} style={{ marginLeft: 10 }} />
        </span>
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
        style={{ marginLeft: 15 }}
      >
        Sign In
      </Button>
    </Form>
  );
};

export default Register;
