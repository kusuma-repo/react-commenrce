import userActionTypes from './User.types';
import {
  SignInSuccess,
  SignInFailed,
  signOutSuccess,
  signOutFailure,
} from './User.action';

import {
  auth,
  googleProvider,
  createUserDoc,
  getCurrentUser,
} from '../../firebase/Firebase.utils';

import { takeLatest, call, all, put } from 'redux-saga/effects';

export function* getUserSnapshotRef(userAuth) {
  try {
    const userRef = yield call(createUserDoc, userAuth);
    const snapShotUser = yield userRef.get();
    yield put(SignInSuccess({ id: snapShotUser.id, ...snapShotUser.data() }));
  } catch (error) {
    yield put(SignInFailed(error));
  }
}

export function* signOutgen() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure);
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    getUserSnapshotRef(user);
  } catch (error) {
    yield put(SignInFailed(error));
  }
}

export function* signInWithEmailPassword({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    getUserSnapshotRef(user);
  } catch (error) {
    yield put(SignInFailed(error));
  }
}
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getUserSnapshotRef(userAuth);
  } catch (error) {
    yield put(SignInFailed(error));
  }
}

export function* onSignOutgen() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOutgen);
}

export function* onCheckSessionUser() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* onGooleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
export function* onEmailSignInStart() {
  yield takeLatest(
    userActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmailPassword
  );
}

export function* userSaga() {
  yield all([
    call(onGooleSignInStart),
    call(onEmailSignInStart),
    call(onCheckSessionUser),
    call(onSignOutgen),
  ]);
}
