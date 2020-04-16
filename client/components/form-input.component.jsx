import React from 'react';
import '../styles/form-input.styles.scss'

const FormInput = ({type, label, placeholder, name, handleChange, passwordMatch}) => (
  <div className='form'>
    <input className={passwordMatch} onChange={handleChange} name={name} type={type} label={label} placeholder={placeholder.toUpperCase()} />
  </div>

);

export default FormInput;