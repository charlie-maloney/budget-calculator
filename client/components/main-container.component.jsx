import React from 'react';
import SalaryInput from './salary-input.component';
import BudgetContainer from './budget-container.component';
import '../styles/main-container.styles.scss';

const MainContainer = () => (
  <div className='main-container'>
    <div className='salary-input'>
      <SalaryInput />
    </div>
    <div className='budget-container'>
      <BudgetContainer />
    </div>
  </div>
);

export default MainContainer;
