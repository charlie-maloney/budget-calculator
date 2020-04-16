import React, { useState } from 'react';
import FormInput from '../components/form-input.component';
import Button from '../components/button.component';
import '../styles/signup.styles.scss';

const Signup = ({ isAuth, signIn }) => {
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.confirmPassword) {
      fetch('/user/signup/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
        .then((resp) => resp.json())
        .then((userID) => {signIn(userID)})
        .catch((err) => console.log('Signup Component: fetch POST /signup/ ERROR: ', err));
    } else {
      setPasswordMatch(false);
      setTimeout(() => setPasswordMatch(true), 2000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className='signup'>
      <h2>I do not have an account</h2>
      <span>Sign up with your username and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
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
        <FormInput
          passwordMatch={passwordMatch ? null : 'wrong-password'}
          handleChange={handleChange}
          name='confirmPassword'
          type='password'
          placeholder='Confirm Password'
          label='confirmPassword'
        />
        <div className='button'>
          <Button type='submit' primary>
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
