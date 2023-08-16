import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// Component
import Header from './components/global/Header/Header';
// Page
import HomePage from './pages/HomePage/HomePage';
import Register from './pages/Register/Register';
import RegisterFormPage from './pages/RegisterFormPage/RegisterFormPage';
import ExplorePage from './pages/ExplorePage/ExplorePage';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/:type" element={<RegisterFormPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </Router>
  );
}

export default App;
