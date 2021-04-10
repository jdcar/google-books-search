const router = require('express').Router()
const booksController = require('../controllers/booksController')

router.route('/api/books/:id')
  .get(booksController.getbook)
  .put(booksController.updatebook)
  .delete(booksController.deletebook)

router.route('/api/books')
  .get(booksController.getbooks)
  .post(booksController.createbook)

module.exports = router