import books from "../data/book.js";

export const getBooks = (req, res) => {
  res.status(200).json(books);
};

export const getBookById = (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= books.length) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.status(200).json(books[id]);
};

export const createBook = (req, res) => {
  const { author, title, year } = req.body;
  if (!author || !title || !year) {
    return res.status(400).json({ message: "Invalid data" });
  }
  const newBook = { author, title, year };
  books.push(newBook);
  res.status(201).json(newBook);
};

export const updateBook = (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= books.length) {
    return res.status(404).json({ message: "Book not found" });
  }
  if (!author || !title || !year) {
    return res.status(400).json({ message: "Invalid data" });
  }
  books[id] = [];
  res.status(200).json(books[id]);
};

export const deleteBook = (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= books.length) {
    return res.status(404).json({ message: "Book not found" });
  }
  books.splice(id, 1);
  res.status(200).json({ message: "Delete succesful" });
};
