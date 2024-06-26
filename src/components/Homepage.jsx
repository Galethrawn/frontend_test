import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Common.css';

function Homepage() {
  return (
    <div className="background-image">
      {/* New container div for centering content */}
      <div className="content-container">
        <h1>Welcome to the Book Exchange Platform</h1>
        <p>Reading with a sustainable approach!</p>
        <p>Select an option below:</p>
        <Link to="/login" className="button">Login</Link>
        <Link to="/register" className="button">Register</Link>
      </div>
    </div>
  );
}

export default Homepage;
