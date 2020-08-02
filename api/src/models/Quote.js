// External Dependancies
const mongoose = require('mongoose')

const quoteSchema = new mongoose.Schema({
  number: Number,
  date: Date,
  text: String
})

module.exports = mongoose.model('Quote', quoteSchema)
