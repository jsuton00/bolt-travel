import { all, takeEvery } from '@redux-saga/core/effects';
import * as actionTypes from '../actions/actionTypes';
import { fetchPostsSaga } from './postSagas';
import { fetchProductsSaga } from './productSagas';

export function* watchSagas() {
  yield all([
    takeEvery(actionTypes.FETCH_POSTS, fetchPostsSaga),
    takeEvery(actionTypes.FETCH_PRODUCTS, fetchProductsSaga),
  ]);
}
