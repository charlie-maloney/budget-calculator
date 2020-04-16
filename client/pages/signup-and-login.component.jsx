import React from 'react';
import '../styles/signup-and-login.styles.scss'
import Signup from '../components/signup.component';
import Login from '../components/login.component';

const SignupAndLogin = () => {
  return (
    <div className="signup-and-login">
      <Signup/>
      <Login/>
    </div>
  )
}

export default SignupAndLogin;