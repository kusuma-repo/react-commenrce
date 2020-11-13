import { all, call } from 'redux-saga/effects';

import { fetchCollectionStart } from './collections/Shop.saga';

export default function* rootSaga() {
  yield all([call(fetchCollectionStart)]);
}
