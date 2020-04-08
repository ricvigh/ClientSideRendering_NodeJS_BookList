const books = require('./books.json');

exports.getBooks = () => {
    return new Promise((resolve, reject) => {
        resolve(books);
    });
};
exports.getBook = id => {
    return new Promise((resolve, reject) => {
        resolve(books.find(book => book._id === id));
    });
};
exports.addBook = book => {
    return new Promise((resolve, reject) => {
        resolve({ inserted: 1 });
    });
};
exports.updateBook = (id, book) => {
    return new Promise((resolve, reject) => {
        resolve({ updated: 1 });
    });
};
exports.deleteBook = id => {
    return new Promise((resolve, reject) => {
        resolve({ deleted: 1 });
    });
}; 