// import dependencies and initialize the express router
const express = require('express');
const BooksController = require('../controllers/book-controller');
const router = express.Router();
// define routes
router.get('', BooksController.getBooks);
router.get('/:id', BooksController.getBook);
router.post('', BooksController.postBook);
router.put('/:id', BooksController.putBook);
router.delete('/:id', BooksController.deleteBook);
module.exports = router;