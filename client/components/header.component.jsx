import React from 'react';
import Button from './button.component';
import { Link } from 'react-router-dom';
import '../styles/header.styles.scss';

const Header = ({ isAuth, signOut }) => (
  <div className='header-container'>
    <Link to='/'>
      <div className='logo'>
        <i className='fas fa-money-bill-wave-alt'></i>
      </div>
    </Link>
    <div className='login-options'>
      {!isAuth ? (
        <div>
          <Link to='/signin'>
            <Button>Sign In</Button>
          </Link>
          <Link to='/signin'>
            <Button primary>Sign Up</Button>
          </Link>
        </div>
      ) : (
        <Button onClick={signOut}>Sign Out</Button>
      )}
    </div>
  </div>
);

export default Header;
