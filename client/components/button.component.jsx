import React from 'react';
import '../styles/button.styles.scss';

const Button = ({ children, primary }) => (
<button className= {primary ? 'primary custom-button': 'custom-button'}>{children}</button>
)

export default Button;
