//Require express module instance
const express = require('express');
//Set path module instance
const path = require('path');
//Require Body parser
const bodyParser = require('body-parser');
//Require Mongoose
const mongoose = require('mongoose');

//initialise App
var app = express();

/*Body Parser Middleware*/
app.use(bodyParser.json());


//require Genre Model
Genre = require('./models/genre');

//require Book Model
Book = require('./models/book');

//Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', (req, res)=>{
    res.send('Please use api/books or /api/genres');
});

/****Routes****/

/*Genre Routes  GET*/
app.get('/api/genres', (req, res)=>{
    //Callback function within Genre model function
    Genre.getGenres((err, genres)=>{
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

/*Genre Routes  POST*/
app.post('/api/genres', (req, res)=>{
    //Callback function within Genre model function
    let genre = req.body;
    Genre.addGenres(genre, (err, genre)=>{
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

/*Genre Routes  PUT*/
app.put('/api/genres/:_id', (req, res)=>{
    let id = req.params._id;
    let genre = req.body;

    //update function with params, id, genre, options, callback
    Genre.updateGenres(id, genre, {}, (err, genre)=>{
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

/*Genre Routes  DELETE*/
app.delete('/api/genres/:_id', (req, res)=>{
    let id = req.params._id;
    
    //update function with params, id, genre, options, callback
    Genre.deleteGenre(id, (err, genre)=>{
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

/*Books Route*/
app.get('/api/books', (req, res)=>{
    //Callback function within Book model function
    Book.getBooks((err, books)=>{
        if(err){
            throw err;
        }
        res.json(books);
    });
});

/*Book By Id Route*/
app.get('/api/book/:_id', (req, res)=>{
    //Callback function within Book model function
    Book.getBookById(req.params._id, (err, book)=>{
        if(err){
            throw err;
        }
        res.json(book);
    });
});

/*Books Routes  POST*/
app.post('/api/books', (req, res)=>{
    //Callback function within Genre model function
    let book = req.body;
    Book.addBooks(book, (err, book)=>{
        if(err){
            throw err;
        }
        res.json(book);
    });
});

/*Books Routes  PUT*/
app.put('/api/books/:_id', (req, res)=>{
    let id = req.params._id;
    let book = req.body;

    //update function with params, id, book, options, callback
    Book.updateBooks(id, book, {}, (err, book)=>{
        if(err){
            throw err;
        }
        res.json(book);
    });
});

/*Book Routes  DELETE*/
app.delete('/api/books/:_id', (req, res)=>{
    let id = req.params._id;
    
    //update function with params, id, genre, options, callback
    Book.deleteBook(id, (err, book)=>{
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.listen(5000);
console.log('Running on port 5000....');