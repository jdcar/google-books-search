const router = require('express').Router()
const booksController = require('../controllers/booksController')

router.route('/api/books/:id')
  .get(booksController.getBook)
  // .put(booksController.updatebook)
  .delete(booksController.deleteBook)

router.route('/api/books')
  .get(booksController.getBooks)
  .post(booksController.addBook)

module.exports = router