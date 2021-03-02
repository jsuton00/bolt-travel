import React from 'react';
import { useSelector } from 'react-redux';
import BookingForm from '../components/Products/BookingForm';
import ProductImages from '../components/Products/ProductImages';
import ProductText from '../components/Products/ProductText';
import { ProductLocation } from '../containers/BaseMaps';
import '../styles/pages/productPage.css';

const ProductPage = () => {
  const product = useSelector((state) => state.selectedProduct);

  console.log('Product:', product);
  return (
    <div id="product-page" className="product-page container-fluid">
      <div className="row">
        <ProductImages />
      </div>
      <div className="product-page-content container-fluid">
        <div className="product-page-content-row row">
          <div className="product-page-section product-page-description">
            {product && <ProductText product={product} />}
          </div>
          <div className="product-page-section product-page-booking">
            <BookingForm />
          </div>
        </div>
      </div>
      <div className="row">
        <ProductLocation
          productLocation={product.coords}
          address={product.address}
          name={product.name}
        />
      </div>
    </div>
  );
};

export default ProductPage;
