import React from 'react';
import '../styles/salary-input.styles.scss';
import Button from './button.component';

const SalaryInput = ({ setSalary }) => (
  <div className='salary-container'>
    <input type='text' placeholder='State' />
    <input type='text' placeholder='Annual Salary' onChange={setSalary} />
    <div className='save-button'>
      <Button>Save</Button>
    </div>
  </div>
);

export default SalaryInput;
