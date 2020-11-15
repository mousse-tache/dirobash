// External Dependancies
const boom = require('boom')

// Get Data Models
const Quote = require('../models/Quote')

// Get all quotes
exports.getQuotes = async (req, reply) => {

  const { page } = req.params
  const skip = page > 1 ? page * 30 : 0

  try {
    const users = await Quote.find().sort({number: -1}).skip(skip).limit(30)
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

exports.getQuoteByNumber = async (req, reply) => {
  try {
    const number = req.params.number

    return Quote.findOne({number: number})
  } catch (err) {
    throw boom.boomify(err)
  }
}


exports.getLatest = async (req, reply) => {
  try {
    return Quote.find().sort({number: -1}).limit(1);
  } catch (err) {
    throw boom.boomify(err)
  }
}
