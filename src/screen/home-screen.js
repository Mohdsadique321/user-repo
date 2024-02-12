import React, { useState } from "react";

function Home() {
  const initialBooks = [
    { id: 1, title: "Biotechnology", price: "$500" },
    { id: 2, title: "Biochemistry", price: "$1000" },
    { id: 3, title: "Biophysiology", price: "$5000" },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({ title: "", price: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleAddBook = () => {
    if (newBook.title && newBook.price) {
      setBooks((prevBooks) => [...prevBooks, { id: prevBooks.length + 1, ...newBook }]);
      setNewBook({ title: "", price: "" });
    } else {
      alert("Please enter both title and price for the new book.");
    }
  };

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.price}
          </li>
        ))}
      </ul>
      <h2>Add a New Book</h2>
      <form>
        <label>
          Title:
          <input type="text" name="title" value={newBook.title} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" name="price" value={newBook.price} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </div>
  );
}

export default Home;
