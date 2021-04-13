const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks_Db");

const bookSeed = [
    {
        title: "The Fellowship of the Ring",
        subtitle: '',
        author: "John Ronald Reuel Tolkien",
        description: "Fantasy fiction. The first ever illustrated paperback of part one of Tolkien's epic masterpiece, The Lord of the Rings, featuring 19 colour paintings by Alan Lee.",
        link: "http://books.google.com/books?id=5QRZ4z6A1WwC&dq=lord+of+the+rings&hl=&cd=1&source=gbs_api",
        date:  new Date(Date.now()),
        image: "http://books.google.com/books/content?id=5QRZ4z6A1WwC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    {
        title: "Guide to Middle Earth",
        subtitle: "Tolkien and The Lord of the Rings",
        author: "Colin Duriez",
        description: "This absorbing insight into the mind behind Middle-earth will introduce or remind readers of the abundance that exists in Tolkien's thought and imagination. Interweaving sections explore The Lord of the Rings and its history; the key themes, concepts and images in Tolkein's work; the people and places in his life, and his other writings. At the heart of the book is an indispensible A-Z of middle-earth, with detailed entries on Beings, Places, Things and Events.",
        link: "http://books.google.com/books?id=AN8TDQAAQBAJ&printsec=frontcover&dq=lord+of+the+rings&hl=&cd=3&source=gbs_api",
        date:  new Date(Date.now()),
        image: "http://books.google.com/books/content?id=AN8TDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    {
        title: "The Lord of the Rings",
        subtitle: "Popular Culture in Global Context",
        author: "Ernest Mathijs",
        description: "Bringing together leading scholars in the fields of media and film studies to explore the various strategies and implications underlying the global presence of 'Lord of the Rings', this book covers different national contexts and presents a lively and diverse combination of textual, historical and empirical study.",
        link: "http://books.google.com/books?id=I8mxughWAOEC&pg=PP1&dq=lord+of+the+rings&hl=&cd=6&source=gbs_api",
        date:  new Date(Date.now()),
        image: "http://books.google.com/books/content?id=I8mxughWAOEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    }

]

const runSeeder = async () => {
    
    try {
        await db.Book.deleteMany({})
        await db.Book.insertMany(bookSeed)
    } catch (err) {
        throw new err
    }
    process.exit()
}

runSeeder()