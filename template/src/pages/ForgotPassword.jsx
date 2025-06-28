import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className="form-section">
      <h2>Forgot Password?</h2>
      <p>No worries, we'll send reset instructions!</p>
      <input type="email" className="form-input" placeholder="Enter your email" />
      <button className="btn">Confirm</button>
      <p><Link to="/">Back to Login</Link></p>
    </div>
  );
}

export default ForgotPassword;