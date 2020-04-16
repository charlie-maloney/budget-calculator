import React from 'react';
import '../styles/budget-line-item.styles.scss';

const BudgetLineItem = ({ id, category, amount, monthlyIncome, setAmount, deleteLineItem }) => {

  const formatPercentage = (amount, monthlyIncome) => {
    if (amount / monthlyIncome && Infinity) {
      return (amount / monthlyIncome * 100).toFixed(2)
    } else {
      return 0
    }
  }

  return (
    <div className='line-item'>
      <div className="fill-level" style={{width: `${formatPercentage(amount, monthlyIncome)}%`}}></div>
      <div className='category'>{category}</div>
      <div className='percentage'>{formatPercentage(amount, monthlyIncome)}%</div>
      <input id={id} type='text' placeholder='$' onChange={setAmount} value={amount || ''}/>
      <i id={id} onClick={deleteLineItem} className="fas fa-minus-square"></i>
    </div>
  );
};

export default BudgetLineItem;
