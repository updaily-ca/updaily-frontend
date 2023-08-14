import { useEffect } from 'react';
import { useDocumentTitle } from './utils/functions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage/HomePage';

function App() {

  useDocumentTitle('UpDaily.ca');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
