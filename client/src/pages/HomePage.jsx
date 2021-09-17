import React from 'react';
import { useLocation } from 'react-router';
import { OurServices } from '../components/common/Cards';
import FeaturedListings from '../components/Home/FeaturedListings';
import { OurQualities, WhyUs } from '../components/layouts/PageSections';
import '../styles/pages/homePage.css';
import '../styles/layouts/pageLayouts/pageSections.css';

const HomePage = () => {
  const location = useLocation();
  return (
    <div id="home-page" className="home-page container-fluid">
      <div className="page-section service-section container row">
        <div className="page-section-content service-section-content">
          <h3 className="page-section-title service-section-title row">
            Our Services
          </h3>
          <OurServices />
        </div>
      </div>
      <FeaturedListings />
      <div className="page-section why-us-section row">
        <div className="page-section-content why-us-content">
          <WhyUs location={location} />
          <OurQualities location={location} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
