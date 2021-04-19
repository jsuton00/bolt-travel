import * as api from '../../../apis/posts';
import * as actions from '../actions/posts';
import { put, call } from 'redux-saga/effects';

export function* fetchPostsSaga(action) {
  try {
    yield put(actions.loadingPosts());
    const response = yield call(api.fetchPosts);
    yield put(actions.fetchPostsSuccess(response.data));
  } catch (err) {
    yield put(actions.fetchPostsFail());
  }
}
