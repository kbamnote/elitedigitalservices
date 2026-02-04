import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/common/Navbar';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import LandingPage from './components/landingPage/LandingPage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import PortfolioPage from './components/pages/PortfolioPage';
import BlogPage from './components/pages/BlogPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/about"
              element={
                <>
                  <Header />
                  <div className="mt-20">
                    <AboutPage />
                  </div>
                  <Footer />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <Header />

                  <ServicesPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/portfolio"
              element={
                <>
                  <Header />
                  <PortfolioPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/blog"
              element={
                <>
                  <Header />
                  <BlogPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <ContactPage />
                  <Footer />
                </>
              }
            />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
