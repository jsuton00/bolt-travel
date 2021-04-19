import { faHotel, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import '../../styles/components/productCard.css';

const ProductCards = (props) => {
  const {
    productId,
    productName,
    city,
    country,
    productType,
    featureImage,
    clickProduct,
    price,
  } = props;

  const cardRef = useRef();
  const titleLinkRef = useRef();

  const handleClick = (e) => {
    if (
      e.target.value === cardRef.current.value ||
      e.target.value === titleLinkRef.current.value
    ) {
      clickProduct(e.target.value);
    }
  };

  return (
    <div
      ref={cardRef}
      id={`featured-listings-card-${productId}`}
      className="product-card card"
      onClick={handleClick}
      value={productId}
    >
      {featureImage && (
        <img
          src={featureImage.srcUrl}
          alt={featureImage.altText}
          className="product-card-img card-img-top"
        />
      )}
      <div className="product-card-body card-body">
        <h5
          ref={titleLinkRef}
          className="product-name card-title"
          onClick={handleClick}
          value={productId}
        >
          {productName}
        </h5>
        <p className="product-location card-text">
          <span className="featured-listings-icons">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </span>
          {`${city}, ${country}`}
        </p>
        <p className="product-type card-text">
          <span className="featured-listings-icons">
            <FontAwesomeIcon icon={faHotel} />
          </span>
          {productType}
        </p>
      </div>
      <div className="product-footer card-footer">
        <p className="product-price card-text">{`€${price}`}</p>
      </div>
    </div>
  );
};

export default ProductCards;
