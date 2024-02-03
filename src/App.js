import React, { useState } from 'react';
import './App.css';

function App() {
  const [reviews, setReviews] = useState([]);
  const [reviewForm, setReviewForm] = useState({
    title: '',
    rating: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewForm({ ...reviewForm, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (reviewForm.title && reviewForm.rating) {
      setReviews([...reviews, reviewForm]);
      setReviewForm({ title: '', rating: '', description: '' });
    }
  };

  const handleResetForm = () => {
    setReviewForm({ title: '', rating: '', description: '' });
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };
  return (
    <div className="App">
      <div className="give-review">
        <h2>Give Review</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title*
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={reviewForm.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">
              Rating*
            </label>
            <input
              type="number"
              className="form-control"
              id="rating"
              name="rating"
              value={reviewForm.rating}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={reviewForm.description}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleResetForm}>
            Reset
          </button>
        </form>
      </div>
      <div className="reviews">
        <h2>Reviews</h2>
        <ul className="list-group">
          {reviews.map((review, index) => (
            <li key={index} className="list-group-item">
              <div>
                <strong>{review.title}</strong> - {review.rating} stars
              </div>
              {review.description && <p>{review.description}</p>}
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDeleteReview(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
