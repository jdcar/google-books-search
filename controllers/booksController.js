const db = require('../models')

module.exports = {
  // addBook: function(req, res) {
  //   db.Book.create(req.body)
  //     .then(bookData => {
  //       res.json(bookData)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       res.status(500).send()
  //     })
  // },
  getBooks: function(req, res) {
    db.Book.find({})
      .then(books => {
        res.json(books)
        console.log(books)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send()
      })
  },
  // getBook: function(req, res) {
  //   const { id } = req.params
  //   db.Book.findById(id)
  //     .then(bookData => {
  //       res.json(bookData)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       res.status(500).send()
  //     })
  // },
  // deleteBook: function(req, res) {
  //   const { id } = req.params
  //   db.Book.findByIdAndDelete(id)
  //     .then(bookData => {
  //       res.json(bookData)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       res.status(500).send()
  //     })
  // },
}