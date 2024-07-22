const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customer_name: { type: String, required: true },
  dob: { type: Date, required: true },
  monthly_income: { type: Number, required: true }
});

module.exports = mongoose.model('Customer', customerSchema);
