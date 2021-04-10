const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks_Db");

const bookSeed = [
    {
        title: 'Moby Dick',
        subtitle: 'Or the Whale',
        author: 'Herman Melville',
        summary: 'Man loves whale',
        date:  new Date(Date.now())
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