// External Dependancies
const mongoose = require('mongoose')

const quoteSchema = new mongoose.Schema({
})

module.exports = mongoose.model('Quote', quoteSchema)
