import React from 'react';
import FormInput from '../components/form-input.component';
import Button from '../components/button.component';
import '../styles/signup.styles.scss';

const Signup = () => {

  return (
    <div className='signup'>
      <h2>I do not have an account</h2>
      <span>Sign up with your username and password</span>
      <form>
        <FormInput type='email' placeholder='email' label='email' />
        <FormInput type='password' placeholder='password' label='password' />
        <FormInput type='password' placeholder='Confirm Password' label='confirmPassword' />
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
