import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/index';

export const useImages = (imgs) => {
  const [images, setImages] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imgs) {
        if (imgs.length > 0) {
          return setImages(imgs);
        }

        return setImages(imgs);
      }
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [images, imgs]);

  return [images];
};

export const useProductImages = () => {
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.productId);
  const productImages = useSelector((state) => state.productImages);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (productId) {
        dispatch(actions.fetchProductImages(productId));
      }
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, productId]);

  return [productImages];
};
