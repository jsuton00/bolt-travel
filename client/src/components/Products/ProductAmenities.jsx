import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProductFeatures = (props) => {
  const { feature } = props;
  return (
    <p className="product-feature-text list-group-item">
      <span className="product-feature-icon">
        <FontAwesomeIcon icon={faCheck} />
      </span>
      {feature}
    </p>
  );
};

export default ProductFeatures;
