import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import QuoteModal from './components/common/QuoteModal';
import LandingPage from './components/landingPage/LandingPage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import PortfolioPage from './components/pages/PortfolioPage';
import BlogPage from './components/pages/BlogPage';
import BlogDetailsPage from './components/pages/BlogDetailsPage';
import ContactPage from './components/pages/ContactPage';
import ItManagementPage from './components/pages/ItManagementPage';
import SeoOptimizationPage from './components/pages/SeoOptimizationPage';
import CyberSecurityPage from './components/pages/CyberSecurityPage';
import DataSecurityPage from './components/pages/DataSecurityPage';
import EngagementModelsPage from './components/pages/EngagementModelsPage';
import CaseStudiesPage from './components/pages/CaseStudiesPage';
import OurTeamPage from './components/pages/OurTeamPage';
import TermsConditionsPage from './components/pages/TermsConditionsPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';

function App() {
  const location = useLocation();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

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
                  <Header onGetQuote={openQuoteModal} />
                  <div className="">
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
                  <Header onGetQuote={openQuoteModal} />
                  <div className="">
                    <ServicesPage onGetQuote={openQuoteModal} />
                  </div>
                  <Footer />
                </>
              }
            />
            <Route
              path="/portfolio"
              element={
                <>
                  <Header onGetQuote={openQuoteModal} />
                  <div className="">
                    <PortfolioPage />
                  </div>
                  <Footer />
                </>
              }
            />
            <Route
              path="/blog"
              element={
                <>
                  <Header onGetQuote={openQuoteModal} />
                  <div className="">
                    <BlogPage />
                  </div>
                  <Footer />
                </>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <>
                  <Header onGetQuote={openQuoteModal} />
                  <BlogDetailsPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Header onGetQuote={openQuoteModal} />
                  <div className="">
                    <ContactPage />
                  </div>
                  <Footer />
                </>
              }
            />
            {/* New SEO-friendly pages */}
            <Route
              path="/it-management"
              element={
                <>
                  <Header onGetQuote={openQuoteModal} />
                  <ItManagementPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/seo-optimization"
              element={
                <>
                  <Header onGetQuote={openQuoteModal} />
                  <SeoOptimizationPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/cyber-security"
              element={
                <>
                  <Header onGetQuote={openQuoteModal} />
                  <CyberSecurityPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/data-security"
              element={
                <>
                  <Header onGetQuote={openQuoteModal} />
                  <DataSecurityPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/engagement-models"
              element={
                <>
                  <Header onGetQuote={openQuoteModal} />
                  <EngagementModelsPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/case-studies"
              element={
                <>
                  <Header onGetQuote={openQuoteModal} />
                  <CaseStudiesPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/our-team"
              element={
                <>
                  <Header onGetQuote={openQuoteModal} />
                  <OurTeamPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/terms-conditions"
              element={
                <>
                  <Header onGetQuote={openQuoteModal} />
                  <TermsConditionsPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <>
                  <Header onGetQuote={openQuoteModal} />
                  <PrivacyPolicyPage />
                  <Footer />
                </>
              }
            />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </div>
  );
}

export default App;
