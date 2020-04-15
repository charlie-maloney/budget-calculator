import React from 'react';
import '../styles/salary-input.styles.scss';

const SalaryInput = ({ setSalary }) => (
  <div className='salary-container'>
    <input type='text' placeholder='State' />
    <input type='text' placeholder='Annual Salary' onChange={setSalary} />
  </div>
);

export default SalaryInput;
