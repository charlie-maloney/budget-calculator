import React from 'react';
import '../styles/salary-input.styles.scss';
import NumberFormat from 'react-number-format';


const SalaryInput = ({ setSalary, annualIncome }) => (
  <div className='salary-container'>
    <input type='text' placeholder='State' />
    <input type='text' placeholder='Annual Salary' onChange={setSalary} value={annualIncome || ''} />
    {/* <NumberFormat isNumericString={true} type='text' value={annualIncome} placeholder='Annual Salary' onChange={setSalary} thousandSeparator={true} prefix={'$'} /> */}
  </div>
);

export default SalaryInput;
