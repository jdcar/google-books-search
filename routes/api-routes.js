const router = require('express').Router()
const booksController = require('../controllers/booksController')

router.route('/api/books/:id')
  .get(booksController.getbook)
  // .put(booksController.updatebook)
  .delete(booksController.deletebook)

router.route('/api/books')
  .get(booksController.getbooks)
  .post(booksController.addBook)

module.exports = router