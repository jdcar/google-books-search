const db = require('../models')

module.exports = {
  createBook: function(req, res) {
    db.Book.create(req.body)
      .then(bookData => {
        res.json(bookData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  getBooks: function(req, res) {
    db.Book.find({})
      .then(books => {
        res.json(books)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  getBook: function(req, res) {
    const { id } = req.params
    db.Book.findById(id)
      .then(bookData => {
        res.json(bookData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  updateBook: function(req, res) {
    const { id } = req.params
    db.Book.findByIdAndUpdate(id, req.body, { new: true })
      .then(bookData => {
        res.json(bookData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  deleteBook: function(req, res) {
    const { id } = req.params
    db.Book.findByIdAndDelete(id)
      .then(bookData => {
        res.json(bookData)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
}