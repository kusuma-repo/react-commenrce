import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertDirectoryToMap,
} from '../../firebase/Firebase.utils';

import {
  fetchdirectorySuccess,
  fetchdirectoryFailure,
} from './Directory.action';
import DirectoryTypes from './Directory.types';

export function* fetchDirectoryAsync() {
  try {
    const directory = firestore.collection('directory');
    const snapShot = yield directory.get();
    const directoryMap = yield call(convertDirectoryToMap, snapShot);
    yield put(fetchdirectorySuccess(directoryMap));
  } catch (error) {
    yield put(fetchdirectoryFailure(error.message));
  }
}

export function* fetchDirectoryStart() {
  yield takeLatest(DirectoryTypes.DIRECTORY_FETCH_START, fetchDirectoryAsync);
}

export function* directorySaga() {
  yield all([call(fetchDirectoryStart)]);
}
