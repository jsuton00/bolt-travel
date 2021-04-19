import React from 'react';
import { travelServices } from '../../assets/data/aboutUs';
import { useCardContent } from '../../hooks/useCards';
import { IconCards } from './Cards';

const ServiceCards = () => {
  const services = useCardContent(travelServices);
  return (
    <>
      {services.length > 0 &&
        services.map((service, index) => {
          return (
            <IconCards
              key={index}
              cardType="service"
              cardIcon={service.icon}
              cardTitle={service.title}
            />
          );
        })}
    </>
  );
};

export default ServiceCards;
