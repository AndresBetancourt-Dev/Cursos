const express = require("express");
const books = require("../models/books");
let router = express.Router();

router.post("/", (request, response) => {
  const book = request.body;

  if (!book.isbn || !book.title) {
    response.status(400);
    response.json({ message: "Bad Request" });
  } else {
    books.push(book);
    response.send("Book is added to the database");
  }
});

router.get("/", (request, response) => {
  response.json(books);
});

router.put("/:id", (request, response) => {
  const isbn = request.params.id;
  const data = request.body;

  const bookIndex = books.findIndex((bookP) => bookP.isbn === isbn);

  if (bookIndex === -1) {
    response.status(404).send(`Book with ${isbn} was not found`);
  } else {
    books[bookIndex] = data;
    response.send(`Successfully Updated`);
  }
});

router.delete("/:id", (request, response) => {
  const isbn = request.params.id;
  const bookIndex = books.findIndex((book) => book.isbn === isbn);

  if (bookIndex === -1) {
    response.status(404).send(`Book with ${isbn} was not found`);
  } else {
    books.splice(bookIndex, 1);
    response.send(`Successfully Deleted`);
  }
});


module.exports = router;