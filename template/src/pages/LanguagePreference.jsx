import React from 'react';
import { Link } from 'react-router-dom';

function LanguagePreference() {
  return (
    <div className="form-section">
      <h2>How would you prefer?</h2>
      <p>Select your preferred language</p>
      <select className="form-input">
        <option>English</option>
        <option>Pidgin English</option>
      </select>
      <button className="btn"><Link to="/gender-preference">Next</Link></button>
    </div>
  );
}

export default LanguagePreference;