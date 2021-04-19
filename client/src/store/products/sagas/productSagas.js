import * as api from '../../../apis/products';
import * as actions from '../actions/products';
import { put, call } from 'redux-saga/effects';

export function* fetchProductsSaga(action) {
  try {
    yield put(actions.loadingProducts());
    const response = yield call(api.fetchProducts);
    yield put(actions.fetchProductsSuccess(response.data));
  } catch (err) {
    yield put(actions.fetchProductsFail());
  }
}
