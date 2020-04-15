import React from 'react';
import BudgetLineItem from './budget-line-item.component';
import '../styles/budget-container.styles.scss';

const BudgetContainer = ({ lineItems, total, setAmount, monthlyIncome, deleteLineItem }) => {
  return (
    <div className='budget-container'>
      {lineItems.map((item, i) => (
        <BudgetLineItem
          key={i}
          id={i}
          deleteLineItem={deleteLineItem}
          monthlyIncome={monthlyIncome}
          category={item.category}
          amount={item.amount}
          total={total}
          setAmount={setAmount}
        />
      ))}
      <i className='plus fas fa-plus-square'></i>
    </div>
  );
};
export default BudgetContainer;
