let mongoose = require('mongoose');

//Book Schema
let bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
    },
    pages:{
        type: String
    },
    image_url:{
        type: String
    },
    buy_url:{
        type: String
    },
    create_date:{
        type:Date,
        default: Date.now
    }
});

let Book = module.exports = mongoose.model('Book', bookSchema);

//Get Books 
module.exports.getBooks = (callback, limit)=>{
    Book.find(callback).limit(limit);
}

//Get Book by ID 
module.exports.getBookById = (Id,callback)=>{
    Book.findById(Id, callback);
}

//Add Books
module.exports.addBooks = (book, callback)=>{
    Book.create(book, callback);
}

//Update Books
module.exports.updateBooks = (id, book, options, callback)=>{
    //Create Query 
    let query = {_id:id}

    let update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url

    }

    Book.findOneAndUpdate(query, update, options, callback);
}

//Delete Book
module.exports.deleteBook = (id, callback)=>{
    //Create Query 
    let query = {_id:id}
    
    Book.remove(query, callback);
}