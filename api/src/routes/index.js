// Import our Controllers
const quoteController = require('../controllers/quoteController')

const routes = [
  {
    method: 'GET',
    url: '/api/quotes',
    handler: quoteController.getQuotes
  },
  {
    method: 'POST',
    url: '/api/quote',
    handler: quoteController.addQuote
  }
]

module.exports = routes
