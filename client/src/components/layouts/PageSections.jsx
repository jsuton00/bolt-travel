import React, { useEffect, useState } from 'react';
import { QualityCards } from '../common/Cards';
import { ourQualities } from '../../assets/data/aboutUs';
import '../../styles/layouts/pageLayouts.css';

export const WhyUs = (props) => {
  const { location } = props;
  return (
    <div className="why-us-heading">
      <h3 className="why-us-title">
        {location && location.pathname === '/'
          ? `Why Us?`
          : `What Makes Us Different From Other Travel Agencies?`}
      </h3>
    </div>
  );
};

export const OurQualities = (props) => {
  const { location } = props;
  const [qualities, setQualities] = useState('');

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
    <div className="quality-section">
      {location && location.pathname === '/' ? (
        <h4 className="quality-heading">Our Qualities</h4>
      ) : (
        ''
      )}
      <QualityCards qualities={qualities} />
    </div>
  );
};
