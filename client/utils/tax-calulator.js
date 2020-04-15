const taxBrackets = require('tax-brackets');

const federalRates = [
  [1, 9700, 10],
  [9701, 39475, 12],
  [39476, 84200, 22],
  [84201, 160725, 24],
  [160726, 204100, 32],
  [204101, 510300, 35],
  [510301, Infinity],
];

const stateRates = [
  [1, 8808, 1],
  [8809, 20882, 2],
  [20883, 32959, 4],
  [32960, 45752, 6],
  [45753, 57823, 8],
  [57824, 295372, 9.3],
  [295373, 354444, 10.3],
  [354445, 590741, 11.3],
  [590742, 999999, 12.3],
  [1,000,000, Infinity, 13.3],
];

const ficaAndDisablilityCalc = (annualIncome) => {
  const socialSecurityTax = 0.062
  const medicareTax = 0.0145
  const disabilityTax = 0.01
  if (annualIncome > 137000) {
    // there is a limit on SST
    return (137700 * socialSecurityTax) + (annualIncome * medicareTax) + (annualIncome * disabilityTax)
  } else {
    return (annualIncome * socialSecurityTax) + (annualIncome * medicareTax) + (annualIncome * disabilityTax)
  }
}

const monthlyTaxCalc = (annualIncome, savings, insurance) => {
  const annPayLessDeduct = annualIncome - (savings * 12) - (insurance * 12);
  const federalTaxes = taxBrackets.calculate(annPayLessDeduct, federalRates);
  const stateTaxes = taxBrackets.calculate(annPayLessDeduct, stateRates);
  const ficaTaxes = ficaAndDisablilityCalc(annualIncome)
  const totalTaxes = federalTaxes + stateTaxes + ficaTaxes
  const afterTaxAnnIncome = annPayLessDeduct - totalTaxes
  const monthlyPay = afterTaxAnnIncome / 12
  return monthlyPay;
};

module.exports = monthlyTaxCalc;

