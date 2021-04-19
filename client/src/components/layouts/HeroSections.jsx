import React from 'react';
import { HomeLocation } from '../../containers/BaseMaps';
import { useImages } from '../../hooks/useImages';
import { heroImages } from '../../utils/fetchImages';
import { HeroImages } from '../common/Images';
import '../../styles/layouts/pageLayouts.css';
import '../../styles/layouts/pageLayouts/heroSection.css';

export const HeroImageSection = () => {
  const [images] = useImages(heroImages);

  return (
    <div className="hero-image-row row">
      <HeroImages images={images} />
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
