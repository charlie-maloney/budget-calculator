import React, { useState, useEffect } from 'react';
import SalaryInput from './salary-input.component';
import BudgetContainer from './budget-container.component';
import MonthlyPay from './monthly-pay.component';
import '../styles/main-container.styles.scss';

const MainContainer = () => {
  const [annualIncome, setAnnualIncome] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [location, setLocation] = useState(0);
  const [balance, setBalance] = useState(0);
  const [total, setTotal] = useState(0);
  const [lineItems, setLineItems] = useState([
    { category: 'Housing', amount: 0 },
    { category: 'Groceries', amount: 0 },
    { category: 'Gas & Fuel', amount: 0 },
    { category: 'Utilities', amount: 0 },
    { category: 'Gym', amount: 0 },
    { category: 'Personal Care', amount: 0 },
    { category: 'Miscellaneous', amount: 0 },
    { category: 'Discretionary', amount: 0 },
  ]);

  useEffect(() => {
    setTotal(getTotal(lineItems))
    setBalance((monthlyIncome - total).toFixed(0) || 0)
  })

  const getTotal = (array) => (array.reduce((acc, curr) => acc + Number(curr.amount), 0))

  const setSalary = (e) => {
    const annualIncome = e.target.value
    setAnnualIncome(annualIncome);
    setMonthlyIncome((annualIncome / 12).toFixed(0));
  };

  const setAmount = (e) => {
    const id = e.target.id;
    const newObj = lineItems[id];
    newObj.amount = e.target.value;
    const newArr = [...lineItems];
    newArr[id] = newObj;
    setLineItems(newArr);
  };

  return (
    <div className='main-container'>
      <div className='salary-input'>
        <SalaryInput setSalary={setSalary} />
      </div>
      <div className='monthly-pay'>
        <MonthlyPay monthlyIncome={monthlyIncome} balance={balance} />
      </div>
      <div className='budget-container'>
        <BudgetContainer lineItems={lineItems} monthlyIncome={monthlyIncome} setAmount={setAmount} />
      </div>
    </div>
  );
};

export default MainContainer;
