import { all, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { fetchPostsSaga } from './postSagas';

export default function* watchPosts() {
  yield all([takeEvery(actionTypes.FETCH_POSTS, fetchPostsSaga)]);
}
