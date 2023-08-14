import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Component
import Header from './components/global/Header/Header';
// Page
import HomePage from './pages/HomePage/HomePage';
import Register from './pages/Register/Register';
import RegisterFormPage from './pages/RegisterFormPage/RegisterFormPage';

import './App.css';

function App() {

  return (
    <Router>
      {/* Commenet Header out until the Header code is complete */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/:type" element={<RegisterFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
