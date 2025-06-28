import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="form-section">
      <h2>Become a MedAssist User</h2>
      <p>Let's get you onboarded in 3 easy steps!</p>
      <button className="google-btn">📧 Proceed with Google</button>
      <input type="text" className="form-input" placeholder="First Name" />
      <input type="text" className="form-input" placeholder="Last Name" />
      <input type="email" className="form-input" placeholder="Enter your email" />
      <input type="tel" className="form-input" placeholder="+234 | Phone Number" />
      <input type="password" className="form-input" placeholder="Enter your password" />
      <button className="btn">Sign Up</button>
      <p>Already have an account? <Link to="/">Log In</Link></p>
    </div>
  );
}

export default Signup;