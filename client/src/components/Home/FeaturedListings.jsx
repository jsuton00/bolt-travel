import React from 'react';
import { useProducts } from '../Products/Products';
import ProductCards from '../Products/ProductCards';
import '../../styles/layouts/pageLayouts.css';

const FeaturedListings = () => {
  const [products, selectProduct] = useProducts();

  return (
    <div
      id="featured-listings-section"
      className="featured-listings-section container-fluid"
    >
      <div className="featured-listings-content container-fluid">
        <div className="featured-listings-headings row">
          <h3 className="featured-listings-title row">Featured Listings</h3>
          <p className="featured-listings-text row">
            Examine Our Top Selected Holiday Homes in Croatia
          </p>
        </div>
        <div id="featured-listings-cards" className="featured-listings-cards">
          {products.length > 0 &&
            products
              .filter((p) => p.featuredProperty === true)
              .slice(0, 3)
              .map((p, i) => {
                return (
                  <ProductCards
                    key={i}
                    productId={p.id}
                    productName={p.name}
                    city={p.city}
                    country={p.country}
                    featureImage={p.featureImage}
                    productType={p.propertyType}
                    price={p.price}
                    clickProduct={() => selectProduct(p.id)}
                  />
                );
              })}
        </div>{' '}
      </div>
    </div>
  );
};

export default FeaturedListings;
