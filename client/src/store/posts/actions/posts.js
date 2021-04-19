import * as actionTypes from './actionTypes';

export const loadingPosts = () => ({
  type: actionTypes.LOADING_POSTS,
});

export const fetchPosts = () => ({
  type: actionTypes.FETCH_POSTS,
});

export const fetchPostsFail = () => ({
  type: actionTypes.FETCH_POSTS_FAIL,
});

export const fetchPostsSuccess = (posts) => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  posts,
});

export const filterByTags = (postTags) => ({
  type: actionTypes.FILTER_BY_TAGS,
  postTags,
});

export const filterbyCategories = (postCategories) => ({
  type: actionTypes.FILTER_BY_CATEGORIES,
  postCategories,
});

export const setSearchTerm = (searchTerm) => ({
  type: actionTypes.SET_SEARCH_TERM,
  searchTerm,
});

export const searchPosts = (searchTerm) => ({
  type: actionTypes.SEARCH_POSTS,
  searchTerm,
});

export const searchPostsFail = () => ({
  type: actionTypes.SEARCH_POSTS_FAIL,
});

export const searchPostsSuccess = (posts) => ({
  type: actionTypes.SEARCH_POSTS_SUCCESS,
  posts,
});

export const selectPost = (postId) => ({
  type: actionTypes.SELECT_POST,
  postId,
});

export const fetchPostImages = (postId) => ({
  type: actionTypes.FETCH_POST_IMAGES,
  postId,
});

export const fetchRelatedPosts = (categories) => ({
  type: actionTypes.FETCH_RELATED_POSTS,
  categories,
});
