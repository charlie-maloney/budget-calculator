import React from 'react';
import FormInput from '../components/form-input.component';
import Button from '../components/button.component';
import '../styles/login.styles.scss';

const Login = () => {
  return (
    <div className='login'>
      <h2>I already have an account</h2>
      <span>Sign in with your username and password</span>
      <form>
        <FormInput type='email' placeholder='email' label='email' />
        <FormInput type='password' placeholder='password' label='password' />
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