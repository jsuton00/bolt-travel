import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { businessName, travelServices } from '../../assets/data/aboutUs';
import '../../styles/components/cards.css';

export const OurServices = () => {
  const [services, setServices] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (travelServices) {
        return travelServices.length > 0 && setServices(travelServices);
      }
    });

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="service-card-deck" className="service-card-row row">
      {services.length > 0 &&
        services.map((service, index) => {
          return (
            <div key={index} className="service-card card">
              <div className="service-card-body card-body">
                <div className="service-card-img row">
                  <p className="card-text">
                    <FontAwesomeIcon icon={service.icon} size="3x" />
                  </p>
                </div>
                <h5 className="service-card-title card-title">
                  {service.name}
                </h5>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export const QualityCards = (props) => {
  const { qualities } = props;

  return (
    <div id="quality-cards" className="quality-cards row">
      {qualities.length > 0 &&
        qualities.map((quality, index) => {
          return (
            <div key={index} className="quality-card card">
              <div className="quality-card-images card-img-top">
                <p className="quality-card-icons card-text">
                  <FontAwesomeIcon icon={quality.icon} size="3x" />
                </p>
              </div>
              <div className="quality-card-body card-body">
                <h5 className="quality-card-title card-title">
                  {quality.name}
                </h5>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export const NameCards = () => {
  const [names, setNames] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setNames(businessName);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="business-name-cards" className="business-name-cards card-deck">
      {names.length > 0 &&
        names.map((n, i) => {
          return (
            <div key={i} className="business-name-card card">
              <div className="business-name-card-image card-img-top">
                <p className="business-name-card-letter card-text">
                  {n.letter}
                </p>
              </div>
              <div className="business-name-card-body card-body">
                <h5 className="business-name-card-title card-title">
                  {n.meaning}
                </h5>
                <p className="business-name-card-text card-text">{n.text}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
