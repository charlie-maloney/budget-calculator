import React from 'react';
import BudgetLineItem from './budget-line-item.component'
import '../styles/budget-container.styles.scss'

const BudgetContainer = () => (
  <div className="budget-container">
    <BudgetLineItem/>
    <BudgetLineItem/>
    <BudgetLineItem/>
    <BudgetLineItem/>
    <BudgetLineItem/>
    <BudgetLineItem/>
    <BudgetLineItem/>
    <BudgetLineItem/>
  </div>
)

export default BudgetContainer;