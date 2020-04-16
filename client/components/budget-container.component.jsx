import React from 'react';
import BudgetLineItem from './budget-line-item.component';
import '../styles/budget-container.styles.scss';

const BudgetContainer = ({ lineItems, setAmount, monthlyIncome, deleteLineItem, handleNewItem, addItem, newItem, colors }) => {
  return (
    <div className='budget-container'>
      {lineItems.map((item, i) => (
        <BudgetLineItem
          key={i}
          id={i}
          colors={colors}
          deleteLineItem={deleteLineItem}
          monthlyIncome={monthlyIncome}
          category={item.category.toUpperCase()}
          amount={item.amount}
          setAmount={setAmount}
        />
      ))}
      <div className='add-category'>
        <input onChange={handleNewItem} value={newItem} id='addItem' type="text" placeholder="ADD A NEW LINE ITEM"/>
        <i onClick={addItem} className='plus fas fa-plus-square'></i>
      </div>
    </div>
  );
};
export default BudgetContainer;
