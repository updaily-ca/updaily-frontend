import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// Component
import Header from './components/global/Header/Header';
// Page
import HomePage from './pages/HomePage/HomePage';
import Register from './pages/Register/Register';
import RegisterFormPage from './pages/RegisterFormPage/RegisterFormPage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import DetailPage from './pages/DetailPage/DetailPage';
import Footer from './components/global/Footer/Footer';
// Apollo Client
import client from './graphql/apolloClient';
import {ApolloProvider} from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/:type" element={<RegisterFormPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
