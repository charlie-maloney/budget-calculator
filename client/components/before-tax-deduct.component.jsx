import React from 'react';
import '../styles/before-tax-deduct.styles.scss'

const BeforeTax = ({text, handleSavings, handleInsurance, preTaxSavings, preTaxInsurance}) => (
  <div className='before-tax'>
    <p>{text}</p>
    <input type='text' placeholder='$' onChange={handleSavings || handleInsurance} value={preTaxInsurance || preTaxSavings || ''}/>
  </div>
);

export default BeforeTax;
