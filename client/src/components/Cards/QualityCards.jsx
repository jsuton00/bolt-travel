import React from 'react';
import { ourQualities } from '../../assets/data/aboutUs';
import { useCardContent } from '../../hooks/useCards';
import { IconCards } from './Cards';

const QualityCards = () => {
  const qualities = useCardContent(ourQualities);
  return (
    <>
      {qualities.length > 0 &&
        qualities.map((quality, index) => {
          return (
            <IconCards
              key={index}
              cardType="quality"
              cardIcon={quality.icon}
              cardTitle={quality.title}
            />
          );
        })}
    </>
  );
};

export default QualityCards;
