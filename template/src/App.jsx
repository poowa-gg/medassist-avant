import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './assets/medassist-logo.png'; // Correct import path
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import LanguagePreference from './pages/LanguagePreference';
import GenderPreference from './pages/GenderPreference';
import SymptomDescription from './pages/SymptomDescription';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <img 
            src={logo}  // Using imported logo
            alt="MedAssist Logo" 
            className="logo" 
          />
        </header>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/language-preference" element={<LanguagePreference />} />
          <Route path="/gender-preference" element={<GenderPreference />} />
          <Route path="/symptom-description" element={<SymptomDescription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;