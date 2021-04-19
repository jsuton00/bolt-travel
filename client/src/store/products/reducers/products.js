import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../../utils/reduxUtils';

const products = {
  products: [],
  filteredProducts: [],
  productId: '',
  product: '',
  selectedProduct: '',
  productImages: [],
  loadingProducts: false,
  errorFetchingProducts: false,
};

/** LOADING START */
const loadingProducts = (state, action) => {
  return updateObject(state, {
    loadingProducts: true,
  });
};
/** LOADING END */

/** FETCH PRODUCTS START */
const fetchProductsFail = (state, action) => {
  return updateObject(state, {
    loadingProducts: false,
    errorFetchingProducts: true,
  });
};

const fetchProductsSuccess = (state, action) => {
  return updateObject(state, {
    products: action.products,
    filteredProducts: action.products,
    loadingProducts: false,
    errorFetchingProducts: false,
  });
};
/** FETCH PRODUCTS ENDS */

export const selectProduct = (state, action) => {
  let selectedProduct;

  if (action.productId) {
    if (state.products.length > 0) {
      selectedProduct = state.products.find(
        (product) => product.id === action.productId,
      );
    }

    return updateObject(state, {
      productId: action.productId,
      product: selectedProduct,
      selectedProduct: selectedProduct,
      loadingProducts: false,
      errorFetchingProducts: false,
    });
  }
};

export const fetchProductImages = (state, action) => {
  let selectedProduct = state.product;
  let productImages;

  if (action.productId) {
    if (selectedProduct.id === action.productId) {
      if (selectedProduct.images) {
        productImages = selectedProduct.images;
      } else {
        productImages = selectedProduct.featureImage;
      }
    } else {
      productImages = '';
    }

    return updateObject(state, {
      productImages: productImages,
    });
  }
};

const productReducer = (state = products, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_FAIL:
      return fetchProductsFail(state, action);
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return fetchProductsSuccess(state, action);
    case actionTypes.SELECT_PRODUCT:
      return selectProduct(state, action);
    case actionTypes.FETCH_PRODUCT_IMAGES:
      return fetchProductImages(state, action);
    case actionTypes.LOADING_PRODUCTS:
      return loadingProducts(state, action);
    default:
      return state;
  }
};

export default productReducer;
