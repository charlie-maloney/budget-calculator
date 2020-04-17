import React, { useState, useEffect } from 'react';
import SalaryInput from './salary-input.component';
import BudgetContainer from './budget-container.component';
import MonthlyPay from './monthly-pay.component';
import BeforeTax from './before-tax-deduct.component';
import { Doughnut } from 'react-chartjs-2';
import '../styles/main-container.styles.scss';

import monthlyTaxCalc from '../utils/tax-calculator';
import Button from './button.component';

const MainContainer = ({ isAuth }) => {
  const [isSaving, setIsSaving] = useState(false)
  const [fetched, setFetched] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [annualIncome, setAnnualIncome] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [preTaxSavings, setPreTaxSavings] = useState(0);
  const [preTaxInsurance, setPreTaxInsurance] = useState(0);
  const [location, setLocation] = useState(0);
  const [balance, setBalance] = useState(0);
  const [total, setTotal] = useState(0);
  const [newItem, setNewItem] = useState('');
  const [lineItems, setLineItems] = useState([
    { category: 'Saving', amount: '' },
    { category: 'Housing', amount: '' },
    { category: 'Groceries', amount: '' },
    { category: 'Gas & Fuel', amount: '' },
    { category: 'Utilities', amount: '' },
    { category: 'Gym', amount: '' },
    { category: 'Personal Care', amount: '' },
    { category: 'Miscellaneous', amount: '' },
    { category: 'Discretionary', amount: '' },
  ]);

  useEffect(() => {
    setTotal(getTotal(lineItems));
    setBalance((monthlyIncome - total).toFixed(0) || 0);
    // Calculate Monthly Paycheck
    const monthlyPayCheck = monthlyTaxCalc(annualIncome, preTaxSavings, preTaxInsurance).toFixed(0);
    setMonthlyIncome(monthlyPayCheck);
  });

  /* ---------------------------- Fetch User  Data ---------------------------- */
  useEffect(function getUserData() {
    if (isAuth && !fetched && !isFetching) {
      setIsFetching(true);
      fetch('/data/get/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userID: isAuth }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          const { lineItems, annualIncome, preTaxSavings, preTaxInsurance } = data;
          setLineItems(lineItems);
          setAnnualIncome(annualIncome);
          setPreTaxSavings(preTaxSavings);
          setPreTaxInsurance(preTaxInsurance);
          setFetched(true);
          setIsFetching(false);
        })
        .catch((err) => console.log('ERROR in getUserData:', err));
    }
  });

  /* ----------------------------- Save User Data ----------------------------- */
  const saveUserData = () => {
    if (isAuth) {
      const userData = {
        lineItems: lineItems,
        annualIncome: annualIncome,
        preTaxSavings: preTaxSavings,
        preTaxInsurance: preTaxInsurance,
        userID: isAuth,
      };
      fetch('/data/save/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      })
        .then((resp) => resp.json())
        .then((message) => console.log(message))
        .catch((err) => console.log('ERROR in saveUserData:', err));

        setIsSaving(true)
        setTimeout(() => setIsSaving(false), 1000)
    }
  };

/* -------------------------------- Handlers -------------------------------- */
  const getTotal = (array) => array.reduce((acc, curr) => acc + Number(curr.amount), 0);

  const setSalary = (e) => {
    console.log(e.target.value)
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

  const addItem = () => {
    const newArr = [...lineItems];
    newArr.push({ category: newItem, amount: 0 });
    setLineItems(newArr);
    setNewItem('');
  };

  const handleNewItem = (e) => {
    const item = e.target.value;
    setNewItem(item);
  };

  const deleteLineItem = (e) => {
    const id = Number(e.target.id);
    let newArr = [...lineItems];
    newArr = newArr.filter((item, i) => i !== id);
    setLineItems(newArr);
  };

  /* ----------------------------- Pie Chart Data ----------------------------- */
  const colors = [
    '#458B00',
    '#66CD00',
    '#76EE00',
    '#629632',
    '#659D32',
    '#397D02',
    '#BCED91',
    '#A6D785',
    '#61B329',
    '#476A34',
    '#4CBB17',
    '#308014',
    '#55AE3A',
  ];

  const options = {
    legend: {
      display: false,
    },
  };

  const data = {
    labels: lineItems.map((array) => array.category),
    datasets: [
      {
        data: lineItems.map((obj) => obj.amount || 0),
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };

  return (
    <div className='main-container'>
      <div className='salary-input'>
        <SalaryInput setSalary={setSalary} annualIncome={annualIncome} />
      </div>
      <div className='pre-tax-savings'>
        <BeforeTax
          handleSavings={handleSavings}
          text={'Monthly Pre-Tax Savings (401k, IRA, Etc.)'}
          savings={true}
          preTaxSavings={preTaxSavings}
        />
      </div>
      <div className='medical-insurance'>
        <BeforeTax
          handleInsurance={handleInsurance}
          text={' Monthly Pre-Tax Insurance (Medical, Dental, Life, Etc.)'}
          preTaxInsurance={preTaxInsurance}
        />
      </div>
      <div className='monthly-pay'>
        <MonthlyPay monthlyIncome={monthlyIncome} balance={balance} />
      </div>
      <div className='budget-container'>
        <BudgetContainer
          colors={colors}
          newItem={newItem}
          deleteLineItem={deleteLineItem}
          handleNewItem={handleNewItem}
          addItem={addItem}
          lineItems={lineItems}
          monthlyIncome={monthlyIncome}
          setAmount={setAmount}
        />
      </div>
      <div className='pie-chart'>
        <Doughnut data={data} options={options} width={300} />
      </div>
      <div className='save-button'>
        <Button onClick={saveUserData}>{isSaving ? 'Saving' : 'Save'}</Button>
      </div>
    </div>
  );
};

export default MainContainer;
