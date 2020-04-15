const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  salary: Number,
  preTaxSavings: Number,
  preTaxInsurance: Number,
  lineItems: [{ category: String, amount: {}}],
});


module.exports = mongoose.model('User', userSchema)