import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { NameCards, OurServices } from '../components/common/Cards';
import { OurQualities, WhyUs } from '../components/layouts/PageSections';
import { aboutUsText } from '../constants/pageTexts';
import '../styles/pages/aboutPage.css';

const AboutPage = () => {
  const [aboutUs, setAboutUs] = useState('');
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (aboutUsText) {
        setAboutUs(aboutUsText);
      }
    });

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <div className="about-us-section container-fluid">
        <div className="about-us-content container">
          {aboutUs && (
            <>
              <h3 className="about-us-title row">
                {aboutUs.headings.heading3}
              </h3>
              <p className="about-us-text row">{aboutUs.paragraphs[0]}</p>
              <h4 className="about-us-title row">
                {aboutUs.headings.heading4}
              </h4>
              <p className="about-us-text row">{aboutUs.paragraphs[1]}</p>
            </>
          )}
          <OurServices />
        </div>
      </div>
      <div className="business-name-section container-fluid">
        <div className="business-name-content container">
          <h3 className="business-name-title row">
            Bolt Travel – Business Name
          </h3>
          <p className="business-name-text row">
            The name Bolt Travel is an acronym which marks the following four
            business aspects of travel
          </p>
          <NameCards />
        </div>
      </div>
      <div className="why-us-section">
        <div className="why-us-content">
          <WhyUs location={location} />
          <OurQualities location={location} />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
