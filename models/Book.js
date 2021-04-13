const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: false
    },
    subtitle: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now()
    },
    image: {
        type: String,
        required: false
    },
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book