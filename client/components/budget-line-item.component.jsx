import React from 'react';
import '../styles/budget-line-item.styles.scss';

const BudgetLineItem = ({ id, category, amount, monthlyIncome, setAmount, deleteLineItem, colors }) => {

  const formatPercentage = (amount, monthlyIncome) => {
    if (amount / monthlyIncome && Infinity) {
      return (amount / monthlyIncome * 100).toFixed(2)
    } else {
      return 0
    }
  }

  const barChartStyle = {
    width: `${formatPercentage(amount, monthlyIncome)}%`,
    backgroundColor: colors[id],
    opacity: 0.1
  }

  return (
    <div className='line-item'>
      <div className="fill-level" style={barChartStyle}></div>
      <div className='category'>{category}</div>
      <div className='percentage'>{formatPercentage(amount, monthlyIncome)}%</div>
      <input id={id} type='text' placeholder='$' onChange={setAmount} value={amount || ''}/>
      <i id={id} onClick={deleteLineItem} className="fas fa-minus-square"></i>
    </div>
  );
};

export default BudgetLineItem;
