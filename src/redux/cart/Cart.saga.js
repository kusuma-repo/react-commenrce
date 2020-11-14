import { takeLatest, call, all, put } from 'redux-saga/effects';

import userActionTypes from '../user/User.types';
import { clearCartItemSignOut } from './Cart.action';

export function* clearCartSignOut() {
  yield put(clearCartItemSignOut());
}
export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartSignOut);
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}
