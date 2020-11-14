import { all, call } from 'redux-saga/effects';

import { userSaga } from './user/User.saga';
import { fetchCollectionStart } from './collections/Shop.saga';

export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSaga)]);
}
