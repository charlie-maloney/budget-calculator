import React from 'react';
import '../styles/monthly-pay.styles.scss';

const MonthlyPay = ({ monthlyIncome, balance }) => (
  <div className='monthly-pay-container'>
    <div className='output take-home-pay'>
      <span>{`$${monthlyIncome}`}</span>
      <p>Est. Monthly Take Home Pay</p>
    </div>
    <div className=' output remaining-balance'>
      <span>{`$${balance}`}</span>
      <p>Remaining Balance</p>
    </div>
  </div>
);

export default MonthlyPay;
