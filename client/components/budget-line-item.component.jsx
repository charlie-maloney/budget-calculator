import React from 'react';
import '../styles/budget-line-item.styles.scss'

const BudgetLineItem = () => (
  <div className='line-item'>
    <div className="category">Housing</div>
    <div className="percentage">20%</div>
    <input type="text" placeholder="$"/>
  </div>
)

export default BudgetLineItem;