import React, { useState } from 'react';
import FormInput from '../components/form-input.component';
import Button from '../components/button.component';
import '../styles/login.styles.scss';

const Login = ({ signIn }) => {
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/user/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data === 'User successfully logged in') {
          signIn();
        } else {
          setPasswordMatch(false);
          setTimeout(() => setPasswordMatch(true), 2000);
        }
      })
      .catch((err) => console.log('Login Component: fetch POST /user/login/ ERROR: ', err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className='login'>
      <h2>I already have an account</h2>
      <span>Sign in with your username and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          passwordMatch={passwordMatch ? null : 'wrong-password'}
          handleChange={handleChange}
          name='email'
          type='email'
          placeholder='email'
          label='email'
        />
        <FormInput
          passwordMatch={passwordMatch ? null : 'wrong-password'}
          handleChange={handleChange}
          name='password'
          type='password'
          placeholder='password'
          label='password'
        />
        <div className='button'>
          <Button type='submit' primary>
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
