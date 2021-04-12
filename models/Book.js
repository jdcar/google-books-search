const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: 'A title is required'
    },
    subtitle: String,
    author: String,
    summary: String,
    date: {
        type: Date,
        default: Date.now()
    },
    link: String
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book