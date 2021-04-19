import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import * as actions from '../../store/storeConfig/actions';

export const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);

  let history = useHistory();

  const selectProduct = (productId) => {
    dispatch(actions.selectProduct(productId));

    if (productId) {
      return history.push({
        pathname: `/products/:${productId}`,
        productId: productId,
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      return dispatch(actions.fetchProducts());
    });

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  return [products, selectProduct];
};
