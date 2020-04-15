import React from 'react';
import '../styles/before-tax-deduct.styles.scss'

const BeforeTax = ({text, handleSavings, handleInsurance}) => (
  <div className='before-tax'>
    <p>{text}</p>
    <input type='text' placeholder='$' onChange={handleSavings || handleInsurance} />
  </div>
);

export default BeforeTax;
