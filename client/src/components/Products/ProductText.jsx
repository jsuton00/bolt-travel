import {
  faBath,
  faBed,
  faHotel,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ProductFeatures from './ProductAmenities';

const ProductText = (props) => {
  const { product } = props;
  return (
    <>
      <div className="product-section product-heading row">
        <h2 className="product-title row">{product.name}</h2>
        <p className="product-location-text">{product.location}</p>
      </div>
      <div className="product-section product-metadata row">
        <p className="product-metadata-text">
          <span className="product-metadata-icon">
            <FontAwesomeIcon icon={faHotel} />
          </span>
          {product.propertyType}
        </p>
        <p className="product-metadata-text">
          <span className="product-metadata-icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
          {product.guests >= 2
            ? `${product.guests} guests`
            : `${product.guests} guest`}
        </p>
        <p className="product-metadata-text">
          <span className="product-metadata-icon">
            <FontAwesomeIcon icon={faBed} />
          </span>
          {product.bedrooms >= 2
            ? `${product.bedrooms} bedrooms`
            : `${product.bedrooms} bedroom`}
        </p>
        <p className="product-metadata-text">
          <span className="product-metadata-icon">
            <FontAwesomeIcon icon={faBath} />
          </span>
          {product.bathrooms >= 2
            ? `${product.bathrooms} bathrooms`
            : `${product.bathrooms} bathroom`}
        </p>
      </div>
      <div className="product-section product-description row">
        <h3 className="product-description-title">Description</h3>
        <p className="product-description-text">{product.description}</p>
      </div>
      <div className="product-section product-location row">
        <h3 className="product-location-title">Address</h3>
        <p className="product-location-city">
          <span>City:</span>
          {product.city}
        </p>
        <p className="product-location-country">
          <span>Country:</span>
          {product.country}
        </p>
      </div>
      <div className="product-section product-details row">
        <h3 className="product-details-title">Listing Details</h3>
        <div className="product-details-list list-group">
          <p className="product-details-text list-group-item">
            <span>Size:</span> {`${product.size} m2`}
          </p>
          <p className="product-details-text list-group-item">
            <span>{product.bedrooms >= 2 ? 'Bedrooms' : 'Bedroom'}:</span>{' '}
            {product.bedrooms}
          </p>
          <p className="product-details-text list-group-item">
            <span>{product.bathrooms >= 2 ? 'Bathrooms' : 'Bathroom'}:</span>{' '}
            {product.bathrooms}
          </p>
          <p className="product-details-text list-group-item">
            <span>Check-in:</span> {product.checkInTime}
          </p>
          <p className="product-details-text list-group-item">
            <span>Check-out:</span> {product.checkOutTime}
          </p>
          <p className="product-details-text list-group-item">
            <span>Cancelation:</span> {product.cancellationPolicy}
          </p>
        </div>
      </div>
      <div className="product-section product-features row">
        <h3 className="product-features-title">Features</h3>
        <div className="product-features-list list-group">
          {product.amenities.length > 0 &&
            product.amenities.map((feature, index) => {
              return <ProductFeatures key={index} feature={feature} />;
            })}
        </div>
      </div>
    </>
  );
};

export default ProductText;
