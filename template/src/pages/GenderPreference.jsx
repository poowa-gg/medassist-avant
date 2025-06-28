import React from 'react';
import { Link } from 'react-router-dom';

function GenderPreference() {
  return (
    <div className="form-section">
      <h2>How would you prefer?</h2>
      <p>Select your Gender</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '1rem 0' }}>
        <button className="btn" style={{ background: '#007bff' }}>Male</button>
        <button className="btn" style={{ background: '#28a745' }}>Female</button>
      </div>
      <button className="btn"><Link to="/symptom-description">Next</Link></button>
    </div>
  );
}

export default GenderPreference;