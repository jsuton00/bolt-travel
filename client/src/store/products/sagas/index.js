import { all, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { fetchProductsSaga } from './productSagas';

export default function* watchProducts() {
  yield all([takeEvery(actionTypes.FETCH_PRODUCTS, fetchProductsSaga)]);
}
