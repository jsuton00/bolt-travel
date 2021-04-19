import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../../styles/components/cards/cards.css';

export const IconCards = (props) => {
  const { cardType, cardTitle, cardIcon } = props;
  return (
    <div className={`${cardType}-card icon-card card`}>
      <div className={`${cardType}-card-img icon-card-img card-img-top`}>
        <p className="card-text">
          <FontAwesomeIcon icon={cardIcon} size="3x" />
        </p>
      </div>
      <div className={`${cardType}-card-body icon-card-body card-body`}>
        <h5 className={`${cardType}-card-title icon-card-title card-title`}>
          {`${cardTitle}`}
        </h5>
      </div>
    </div>
  );
};
