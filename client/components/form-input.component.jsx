import React from 'react';
import '../styles/form-input.styles.scss'

const FormInput = ({type, label, placeholder}) => (
  <div className='form'>
    <input type={type} label={label} placeholder={placeholder.toUpperCase()} />
  </div>

);

export default FormInput;