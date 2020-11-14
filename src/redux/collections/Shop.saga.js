import { takeLatest, call, put, all } from 'redux-saga/effects';

import CollectionTypes from './Shop.types';

import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/Firebase.utils';

import { fetchCollectionSuccess, fetchCollectionFailure } from './Shop.action';

export function* fetchCollectionAsync() {
  try {
    const collections = firestore.collection('collection');
    const snapshot = yield collections.get();
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    CollectionTypes.FETCH_COLLECTION_START,
    fetchCollectionAsync
  );
}

export function* shopSaga() {
  yield all([call(fetchCollectionStart)]);
}
