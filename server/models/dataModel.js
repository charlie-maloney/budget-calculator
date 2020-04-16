const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  annualIncome: Number,
  preTaxSavings: Number,
  preTaxInsurance: Number,
  lineItems: [],
  userID: {type: Schema.Types.ObjectId, ref: 'User', required: true}
})

module.exports = mongoose.model('Data', dataSchema)
