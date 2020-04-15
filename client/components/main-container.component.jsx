import React, { useState, useEffect } from 'react';
import SalaryInput from './salary-input.component';
import BudgetContainer from './budget-container.component';
import MonthlyPay from './monthly-pay.component';
import BeforeTax from './before-tax-deduct.component';
import '../styles/main-container.styles.scss';

import monthlyTaxCalc from '../utils/tax-calculator';

const MainContainer = () => {
  const [annualIncome, setAnnualIncome] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [preTaxSavings, setPreTaxSavings] = useState(0);
  const [preTaxInsurance, setPreTaxInsurance] = useState(0);
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
    setTotal(getTotal(lineItems));
    setBalance((monthlyIncome - total).toFixed(0) || 0);
    // Calculate Monthly Paycheck
    const monthlyPayCheck = monthlyTaxCalc(annualIncome, preTaxSavings, preTaxInsurance).toFixed(0);
    setMonthlyIncome(monthlyPayCheck);
  });

  const getTotal = (array) => array.reduce((acc, curr) => acc + Number(curr.amount), 0);

  const setSalary = (e) => {
    const annualIncome = Number(e.target.value);
    setAnnualIncome(annualIncome);
  };

  const handleSavings = (e) => {
    const savings = Number(e.target.value);
    setPreTaxSavings(savings);
  };

  const handleInsurance = (e) => {
    const insurance = Number(e.target.value);
    setPreTaxInsurance(insurance);
  };

  const setAmount = (e) => {
    const id = e.target.id;
    const newObj = lineItems[id];
    newObj.amount = Number(e.target.value);
    const newArr = [...lineItems];
    newArr[id] = newObj;
    setLineItems(newArr);
  };

  const deleteLineItem = (e) => {
    const id = Number(e.target.id)
    let newArr = [...lineItems]
    newArr = newArr.filter((item, i) => i !== id)
    setLineItems(newArr)
  }

  return (
    <div className='main-container'>
      <div className='salary-input'>
        <SalaryInput setSalary={setSalary} />
      </div>
      <div className='pre-tax-savings'>
        <BeforeTax
          handleSavings={handleSavings}
          text={'Monthly Pre-Tax Savings (401k, IRA, Etc.)'}
          savings={true}
        />
      </div>
      <div className='medical-insurance'>
        <BeforeTax
          handleInsurance={handleInsurance}
          text={' MonthlyPre-Tax Insurance (Medical, Dental, Life, Etc.)'}
        />
      </div>
      <div className='monthly-pay'>
        <MonthlyPay monthlyIncome={monthlyIncome} balance={balance} />
      </div>
      <div className='budget-container'>
        <BudgetContainer
          deleteLineItem={deleteLineItem}
          lineItems={lineItems}
          monthlyIncome={monthlyIncome}
          setAmount={setAmount}
        />
      </div>
    </div>
  );
};

export default MainContainer;
