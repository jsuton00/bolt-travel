import React from 'react';
import FeaturedListings from '../components/Home/FeaturedListings';
import {
  HeroImageSection,
  OurServiceSection,
  WhyUsSection,
} from '../components/layouts/PageSections';
import '../styles/pages/homePage.css';

const HomePage = () => {
  return (
    <>
      <HeroImageSection />
      <OurServiceSection />
      <FeaturedListings />
      <WhyUsSection />
    </>
  );
};

export default HomePage;
