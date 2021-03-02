import React from 'react';
import { useImages } from '../../hooks/useImages';

export const BlogImages = (props) => {
  const { featureImage } = props;
  const [images] = useImages(featureImage);

  return (
    <div className="blog-images">
      {images && <img src={images.srcUrl} alt={images.altText} />}
    </div>
  );
};

export const BlogImageSlider = () => {
  return <div id="blog-image-slider">BlogImageSlider</div>;
};
