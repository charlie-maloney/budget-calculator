import React, {useState} from 'react';
import FormInput from '../components/form-input.component';
import Button from '../components/button.component';
import '../styles/login.styles.scss';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
      fetch('/user/login/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      })
      .then(resp => resp.json())
      .then(data => console.log(data))
      .catch(err => console.log('Login Component: fetch POST /user/login/ ERROR: ', err))
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  return (
    <div className='login'>
      <h2>I already have an account</h2>
      <span>Sign in with your username and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name='email'
          type='email'
          placeholder='email'
          label='email'
        />
        <FormInput
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
    // <div className='login'>
    //   <h2>I already have an account</h2>
    //   <span>Sign in with your username and password</span>
    //   <form>
    //     <FormInput type='email' placeholder='email' label='email' />
    //     <FormInput type='password' placeholder='password' label='password' />
    //     <div className='button'>
    //       <Button type='submit' primary>
    //         Sign In
    //       </Button>
    //     </div>
    //   </form>
    // </div>