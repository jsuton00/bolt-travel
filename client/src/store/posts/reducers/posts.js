import { updateObject } from '../../helpers/reduxUtils';
import * as actionTypes from '../actions/actionTypes';

const posts = {
  posts: [],
  filteredPosts: [],
  postId: '',
  post: '',
  selectedPost: '',
  similarPosts: [],
  postImages: [],
  loadingPosts: false,
  errorFetchingPosts: false,
  errorFetchingPost: false,
};

/** LOADING START */
const loadingPosts = (state, action) => {
  return updateObject(state, {
    loadingPosts: true,
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

/** SELECT_POST START */
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
/** SELECT_POST END */

const postReducer = (state = posts, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_FAIL:
      return fetchPostsFail(state, action);
    case actionTypes.FETCH_POSTS_SUCCESS:
      return fetchPostsSuccess(state, action);
    case actionTypes.SELECT_POST:
      return selectPost(state, action);
    case actionTypes.LOADING_POSTS:
      return loadingPosts(state, action);
    default:
      return state;
  }
};

export default postReducer;
