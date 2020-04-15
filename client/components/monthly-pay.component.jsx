import React from 'react';
import '../styles/monthly-pay.styles.scss';

const MonthlyPay = () => (
  <div className='monthly-pay-container'>
    <div className='output take-home-pay'>
      <span>$1,000</span>
      <p>Est. Monthly Take Home Pay</p>
    </div>
    <div className=' output remaining-balance'>
      <span>$1,000</span>
      <p>Remaining Balance</p>
    </div>
  </div>
);

export default MonthlyPay;
