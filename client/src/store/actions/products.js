import * as actionTypes from './actionTypes';

export const loadingProducts = () => ({
  type: actionTypes.LOADING_PRODUCTS,
});

export const fetchProducts = () => ({
  type: actionTypes.FETCH_PRODUCTS,
});

export const fetchProductsFail = () => ({
  type: actionTypes.FETCH_PRODUCTS_FAIL,
});

export const fetchProductsSuccess = (products) => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  products,
});

export const filterByBedrooms = (bedrooms) => ({
  type: actionTypes.FILTER_BY_BEDROOMS,
  bedrooms,
});

export const filterByGuests = (guests) => ({
  type: actionTypes.FILTER_BY_GUESTS,
  guests,
});

export const filterByProductTypes = (productTypes) => ({
  type: actionTypes.FILTER_BY_PRODUCT_TYPES,
  productTypes,
});

export const searchProducts = (searchTerm) => ({
  type: actionTypes.SEARCH_PRODUCTS,
});

export const searchProductsFail = () => ({
  type: actionTypes.SEARCH_PRODUCTS_FAIL,
});

export const searchProductsSuccess = (products) => ({
  type: actionTypes.SEARCH_PRODUCTS_SUCCESS,
  products,
});

export const selectProduct = (productId) => ({
  type: actionTypes.SELECT_PRODUCT,
  productId,
});

export const fetchProductImages = (productId) => ({
  type: actionTypes.FETCH_PRODUCT_IMAGES,
  productId,
});
