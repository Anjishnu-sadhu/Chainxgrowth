import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RealEstatePage from './pages/RealEstatePage';
import SportsPage from './pages/SportsPage';
import HealthPage from './pages/HealthPage';
import EntertainmentPage from './pages/EntertainmentPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import EducationPage from './pages/EducationPage';

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden relative">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/real-estates" element={<RealEstatePage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      
      {!isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
