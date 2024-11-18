import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BuyerPage from './pages/BuyerPage';
import CustomerPage from './pages/CustomerPage';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpPage from './pages/SignUpPage';
import AboutUsPage from './pages/AboutUsPage';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/buyer" element={<BuyerPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
