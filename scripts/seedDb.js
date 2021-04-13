const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks_Db");

const bookSeed = [
    {
        title: 'Moby Dick',
        subtitle: 'Or the Whale',
        author: 'Herman Melville',
        description: 'Man loves whale',
        link: 'https://www.google.com/books/edition/Moby_Dick/XV8XAAAAYAAJ?hl=en&gbpv=1&dq=moby+dick&printsec=frontcover',
        date:  new Date(Date.now())
    },
    {
        title: 'Lorem ipsum',
        subtitle: 'Or the Whale',
        author: 'Herman Melville',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        link: 'https://www.google.com/books/edition/Moby_Dick/XV8XAAAAYAAJ?hl=en&gbpv=1&dq=moby+dick&printsec=frontcover',
        date:  new Date(Date.now())
    },
    {
        title: 'Moby Dick',
        subtitle: 'adipiscing elit',
        author: 'Melville Herman',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        link: 'https://www.google.com/books/edition/Moby_Dick/XV8XAAAAYAAJ?hl=en&gbpv=1&dq=moby+dick&printsec=frontcover',
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