import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import JobListingsPage from './pages/JobListings';
import ContactPage from './pages/Contact';
import CompanyShowcasePage from './pages/CompanyShowcase';
import Navbar from './components/Navbar/navbar';

const App = () => {
  const isAuthenticated = localStorage.getItem('userToken');

  return (
    <Router>
      <div>
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate replace to="/home" />} />
          <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate replace to="/login" />} />
          <Route path="/about" element={isAuthenticated ? <AboutPage /> : <Navigate replace to="/login" />} />
          <Route path="/jobs" element={isAuthenticated ? <JobListingsPage /> : <Navigate replace to="/login" />} />
          <Route path="/contact" element={isAuthenticated ? <ContactPage /> : <Navigate replace to="/login" />} />
          <Route path="/showcase" element={isAuthenticated ? <CompanyShowcasePage /> : <Navigate replace to="/login" />} />
          <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
