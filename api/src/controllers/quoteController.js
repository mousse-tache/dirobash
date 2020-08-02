// External Dependancies
const boom = require('boom')

// Get Data Models
const Quote = require('../models/Quote')

// Get all quotes
exports.getQuotes = async (req, reply) => {
  try {
    const users = await Quote.find().sort({$natural: -1})
    return users
  } catch (err) {
    throw boom.boomify(err)
  }
}
// Add a new quote
exports.addQuote = async (req, reply) => {
  try {
    const quoteModel = req.body

    const quote = new Quote(
    {
      ...quoteModel
    })
    return quote.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}
