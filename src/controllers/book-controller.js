const bookService = require('../services/book-service');

exports.getBooks = (req, res) => {
    bookService
        .getBooks()
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err.message));
};
exports.getBook = (req, res) => {
    bookService
        .getBook(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err.message));
};
exports.postBook = (req, res) => {
    bookService
        .addBook(req.body)
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err.message));
};
exports.putBook = (req, res) => {
    bookService
        .updateBook(req.params.id, req.body)
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err.message));
};
exports.deleteBook = (req, res) => {
    bookService
        .deleteBook(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.status(500).send(err.message));
};