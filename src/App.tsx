import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#f7f3ec]">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
