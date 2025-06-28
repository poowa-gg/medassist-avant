import React from 'react';
import { Link } from 'react-router-dom';

function SymptomDescription() {
  return (
    <div className="form-section">
      <h2>Need Help? Symptoms</h2>
      <p>Describe your Symptoms</p>
      <textarea className="form-input" rows="4" placeholder="e.g., Mild fever..."></textarea>
      <img src="https://via.placeholder.com/200" alt="Body Map" className="body-map" />
      <button className="btn">Submit</button>
    </div>
  );
}

export default SymptomDescription;