import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import WhatsAppFloatButton from './components/WhatsAppFloatButton.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import CabBookingPage from './pages/CabBookingPage.jsx';
import OurFleetPage from './pages/OurFleetPage.jsx';
import TermsConditionsPage from './pages/TermsConditionsPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/cab-booking" element={<CabBookingPage />} />
        <Route path="/fleet" element={<OurFleetPage />} />
        <Route path="/terms" element={<TermsConditionsPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-muted">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
              <p className="text-xl text-muted-foreground mb-8">Page not found</p>
              <a href="/" className="text-primary hover:underline">Back to home</a>
            </div>
          </div>
        } />
      </Routes>
      <WhatsAppFloatButton />
      <Toaster />
    </Router>
  );
}

export default App;