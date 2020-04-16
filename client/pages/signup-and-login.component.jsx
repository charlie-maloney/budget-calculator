import React from 'react';
import '../styles/signup-and-login.styles.scss'
import Signup from '../components/signup.component';
import Login from '../components/login.component';

const SignupAndLogin = ({isAuth, signIn}) => {
  return (
    <div className="signup-and-login">
      <Signup isAuth={isAuth} signIn={signIn}/>
      <Login isAuth={isAuth} signIn={signIn}/>
    </div>
  )
}

export default SignupAndLogin;