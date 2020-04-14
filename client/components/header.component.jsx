import React from 'react';
import Button from './button.component'
import '../styles/header.styles.scss'

const Header = () => (
  <div className="header-container">
    <div className="logo">
    <i class="fas fa-money-bill-wave-alt"></i>
    </div>
    <div className="login-options">
      <Button>Sign In</Button>
      <Button primary>Sign Up</Button>
    </div>
  </div>
)

export default Header;