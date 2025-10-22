import React, { useState, useEffect } from 'react';
import { getAllBooks, deleteBook } from '../services/api';
import { Link } from 'react-router-dom';

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const data = await getAllBooks();
      setBooks(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteBook(id);
        fetchBooks(); // Refresh the list
      } catch (error) {
        console.error('Error deleting book:', error);
      }
    }
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Bookstore</h1>
        <Link to="/add" className="btn btn-primary">Add New Book</Link>
      </div>

      <div className="books-grid">
        {books.length === 0 ? (
          <p>No books available. Add your first book!</p>
        ) : (
          books.map((book) => (
            <div key={book._id} className="book-card">
              {book.image && (
                <img src={book.image} alt={book.title} className="book-image" />
              )}
              <h3>{book.title}</h3>
              <p className="author">by {book.author}</p>
              <p className="price">₹{book.price}</p>
              <p className="description">{book.description}</p>
              <div className="card-actions">
                <Link to={`/edit/${book._id}`} className="btn btn-secondary">Edit</Link>
                <button onClick={() => handleDelete(book._id)} className="btn btn-danger">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;