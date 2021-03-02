import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import { useProductImages } from '../../hooks/useImages';
import '../../styles/components/productImages.css';

const ProductImages = () => {
  const [productImages] = useProductImages();

  console.log('Images', productImages);

  return (
    <div className="product-image-gallery container-fluid">
      <Carousel plugin={['arrows']}>
        {productImages.length > 0 &&
          productImages.map((image, i) => {
            return <img key={i} src={image.srcUrl} alt={image.altText} />;
          })}
      </Carousel>
    </div>
  );
};

export default ProductImages;
