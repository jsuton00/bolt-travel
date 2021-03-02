import React from 'react';
import {
  AboutUsSection,
  BusinessNameSection,
  HeroImageSection,
  WhyUsSection,
} from '../components/layouts/PageSections';
import '../styles/pages/aboutPage.css';

const AboutPage = () => {
  return (
    <>
      <HeroImageSection />
      <AboutUsSection />
      <BusinessNameSection />
      <WhyUsSection />
    </>
  );
};

export default AboutPage;
