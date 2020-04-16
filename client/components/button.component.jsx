import React from 'react';
import '../styles/button.styles.scss';

const Button = ({ children, primary, ...otherProps }) => (
<button className= {primary ? 'primary custom-button': 'custom-button'} {...otherProps}>{children}</button>
)

export default Button;
