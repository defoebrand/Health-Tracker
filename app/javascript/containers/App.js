import React from 'react'
import HeaderNav from '../components/HeaderNav'
import SignIn from '../components/SignIn'
import HomePage from '../components/HomePage'
import Footer from '../components/Footer'

const App = () => (
  <div className="App">
    <HeaderNav/>
    <HomePage/>
    {/*<SignIn />*/}
    <Footer/>
  </div>
);

export default App;
