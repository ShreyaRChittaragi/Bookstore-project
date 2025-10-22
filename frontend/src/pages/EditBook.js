import React, { useState, useEffect } from 'react';
import { getBookById, updateBook } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

function EditBook() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    description: '',
    image: ''
  });
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  fetchBook();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
  const fetchBook = async () => {
    try {
      const book = await getBookById(id);
      setFormData({
        title: book.title,
        author: book.author,
        price: book.price,
        description: book.description,
        image: book.image || ''
      });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching book:', error);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook(id, formData);
      alert('Book updated successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating book:', error);
      alert('Failed to update book');
    }
  };

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Price (₹):</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
          />
        </div>

        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Optional"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Update Book</button>
          <button type="button" onClick={() => navigate('/')} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditBook;