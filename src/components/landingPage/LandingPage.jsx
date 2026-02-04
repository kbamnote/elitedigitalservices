import React from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import Header from '../common/Header';
import Navbar from '../common/Navbar';
import AboutSection from './AboutSection';
import StatsSection from './StatsSection';
import CaseStudiesSection from './CaseStudiesSection';
import TechnologySection from './TechnologySection';
import WorkProcessSection from './WorkProcessSection';
import ContactTestimonialSection from './ContactTestimonialSection';
import BlogNewsSection from './BlogNewsSection';
import Footer from '../common/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <HeroSection />
      <ServicesSection />
      <AboutSection/>
      <StatsSection/>
      <CaseStudiesSection/>
      <TechnologySection/>
      <WorkProcessSection/>
      <ContactTestimonialSection/>
      <BlogNewsSection/>
      <Footer/>
    </>

  );
};

export default LandingPage;
