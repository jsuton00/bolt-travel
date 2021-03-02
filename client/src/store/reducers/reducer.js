import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/reduxUtils';

const initialState = {
  posts: [],
  filteredPosts: [],
  products: [],
  filteredProducts: [],
  postId: '',
  post: '',
  selectedPost: '',
  similarPosts: [],
  postImages: [],
  productId: '',
  product: '',
  selectedProduct: '',
  productImages: [],
  loadingPosts: false,
  loadingProducts: false,
  errorFetchingProducts: false,
  errorFetchingPosts: false,
  errorFetchingPost: false,
};

/** LOADING START */
const loadingPosts = (state, action) => {
  return updateObject(state, {
    loadingPosts: true,
  });
};

const loadingProducts = (state, action) => {
  return updateObject(state, {
    loadingProducts: true,
  });
};
/** LOADING END */

/** FETCH POSTS START */
const fetchPostsFail = (state, action) => {
  return updateObject(state, {
    loadingPosts: false,
    errorFetchingPosts: true,
  });
};

const fetchPostsSuccess = (state, action) => {
  return updateObject(state, {
    posts: action.posts,
    filteredPosts: action.posts,
    loadingPosts: false,
    errorFetchingPosts: false,
  });
};
/** FETCH POSTS END */
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
/** SELECT POST START */
export const selectPost = (state, action) => {
  let selectedPost;

  if (action.postId) {
    if (state.posts.length > 0) {
      selectedPost = state.posts.find((post) => post.id === action.postId);
    }

    return updateObject(state, {
      postId: action.postId,
      post: selectedPost,
      selectedPost: selectedPost,
      loadingPosts: false,
      errorFetchingPost: false,
    });
  }
};

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
/** SELECT PROUDUCT END */

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_FAIL:
      return fetchPostsFail(state, action);
    case actionTypes.FETCH_POSTS_SUCCESS:
      return fetchPostsSuccess(state, action);
    case actionTypes.FETCH_PRODUCTS_FAIL:
      return fetchProductsFail(state, action);
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return fetchProductsSuccess(state, action);
    case actionTypes.SELECT_POST:
      return selectPost(state, action);
    case actionTypes.SELECT_PRODUCT:
      return selectProduct(state, action);
    case actionTypes.FETCH_PRODUCT_IMAGES:
      return fetchProductImages(state, action);
    case actionTypes.LOADING_PRODUCTS:
      return loadingProducts(state, action);
    case actionTypes.LOADING_POSTS:
      return loadingPosts(state, action);
    default:
      return state;
  }
};

export default reducer;
