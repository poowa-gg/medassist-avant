import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="form-section">
      <h2>Welcome Back!</h2>
      <p>Log in to your MedAssist account to continue</p>
      <button className="google-btn">📧 Proceed with Google</button>
      <input type="email" className="form-input" placeholder="Enter your email" />
      <input type="password" className="form-input" placeholder="Enter your password" />
      <a href="/forgot-password" style={{ float: 'right' }}>Forgot password?</a>
      <button className="btn">Log In</button>
      <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
    </div>
  );
}

export default Login;