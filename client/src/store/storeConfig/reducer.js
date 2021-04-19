import { combineReducers } from 'redux';
import postReducer from '../posts/reducers/posts';
import productReducer from '../products/reducers/products';

const rootReducer = combineReducers({
  products: productReducer,
  posts: postReducer,
});

export default rootReducer;
