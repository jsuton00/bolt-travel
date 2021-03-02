import React from 'react';
import { useLocation } from 'react-router';

export const BrandLogo = (props) => {
  const { imgSrc, altText } = props;

  return <img src={imgSrc} alt={altText} className="brand-logo-img" />;
};

export const HeroImages = (props) => {
  const { images } = props;

  let location = useLocation();

  const showImages = () => {
    switch (location.pathname) {
      case '/about':
        return (
          <img
            src={images.aboutPage.imgSrc}
            alt={images.aboutPage.altText}
            className="hero-image"
          />
        );
      case '/blog':
        return (
          <img
            src={images.blogPage.imgSrc}
            alt={images.blogPage.altText}
            className="hero-image"
          />
        );

      default:
        return (
          <img
            src={images.homePage.imgSrc}
            alt={images.homePage.altText}
            className="hero-image"
          />
        );
    }
  };
  return <>{images && showImages()}</>;
};
