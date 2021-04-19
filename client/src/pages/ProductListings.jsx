import React from 'react';
import { useProducts } from '../components/Products/Products';
import ProductCards from '../components/Products/ProductCards';
import '../styles/pages/productListings.css';

const ProductListings = () => {
  const [products, selectProduct] = useProducts();

  return (
    <div id="product-listings" className="product-listings container-fluid">
      <div className="product-listings-content container row">
        <div className="products-cards">
          {products.length > 0 &&
            products.map((product, index) => {
              return (
                <ProductCards
                  key={index}
                  productId={product.id}
                  productName={product.name}
                  city={product.city}
                  country={product.country}
                  featureImage={product.featureImage}
                  productType={product.propertyType}
                  price={product.price}
                  clickProduct={() => selectProduct(product.id)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductListings;
