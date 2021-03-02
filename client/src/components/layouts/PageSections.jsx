import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { NameCards, OurServices, QualityCards } from '../common/Cards';
import { HeroImages } from '../common/Images';
import { useImages } from '../../hooks/useImages';
import { heroImages } from '../../utils/fetchImages';
import { ourQualities } from '../../assets/data/aboutUs';
import { aboutUsText } from '../../constants/pageTexts';
import '../../styles/layouts/pageLayouts.css';
import { HomeLocation } from '../../containers/BaseMaps';

export const HeroImageSection = () => {
  const [images] = useImages(heroImages);

  return (
    <div className="hero-section container-fluid">
      <div className="hero-image-row row">
        <HeroImages images={images} />
      </div>
    </div>
  );
};

export const OurServiceSection = () => {
  return (
    <div id="service-section" className="service-section container-fluid">
      <div className="service-section-content container">
        <h3 className="service-section-title row">Our Services</h3>
        <OurServices />
      </div>
    </div>
  );
};

export const WhyUsSection = () => {
  const [qualities, setQualities] = useState('');

  let location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ourQualities) {
        return ourQualities.length > 0 && setQualities(ourQualities);
      }
    });
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="why-us-section container-fluid">
      <div className="why-us-content container">
        <div className="why-us-heading row">
          <h3 className="why-us-title row">
            {location && location.pathname === '/'
              ? `Why Us?`
              : `What Makes Us Different From Other Travel Agencies?`}
          </h3>
        </div>
        <div className="quality-section row">
          {location && location.pathname === '/' ? (
            <h4 className="quality-heading row">Our Qualities</h4>
          ) : (
            ''
          )}
          <QualityCards qualities={qualities} />
        </div>
      </div>
    </div>
  );
};

export const AboutUsSection = () => {
  const [aboutUs, setAboutUs] = useState('');

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
    <div className="about-us-section container-fluid">
      <div className="about-us-content container">
        {aboutUs && (
          <>
            <h3 className="about-us-title row">{aboutUs.headings.heading3}</h3>
            <p className="about-us-text row">{aboutUs.paragraphs[0]}</p>
            <h4 className="about-us-title row">{aboutUs.headings.heading4}</h4>
            <p className="about-us-text row">{aboutUs.paragraphs[1]}</p>
          </>
        )}
        <OurServices />
      </div>
    </div>
  );
};

export const BusinessNameSection = () => {
  return (
    <div className="business-name-section container-fluid">
      <div className="business-name-content container">
        <h3 className="business-name-title row">Bolt Travel – Business Name</h3>
        <p className="business-name-text row">
          The name Bolt Travel is an acronym which marks the following four
          business aspects of travel
        </p>
        <NameCards />
      </div>
    </div>
  );
};

export const HeroMapSection = () => {
  return (
    <div id="hero-map-section" className="hero-map-section container-fluid">
      <HomeLocation />
    </div>
  );
};
