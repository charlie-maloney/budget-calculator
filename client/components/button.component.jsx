import React from 'react';
import '../styles/button.styles.scss';

const Button = ({ children, primary, low, ...otherProps }) => (
<button className= {`${primary ? 'primary' : null} ${low ? 'low-emphasis' : null} custom-button`} {...otherProps}>{children}</button>
)

export default Button;
