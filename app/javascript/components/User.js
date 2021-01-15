import React, { useEffect, useState } from 'react';

const User = () => {
  const [user, setUser] = useState('');
  useEffect(() => {
    // const url = 'http://localhost:3000/user';
    // const url = 'https://obscure-island-28750.herokuapp.com/user';
    const url = '/user';
    const { token } = localStorage;
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      }).then(data => {
        setUser(data);
      }).catch(err => console.log(err));
  }, []);
  return (
    <h1>{user.name}</h1>
  );
};

export default User;
