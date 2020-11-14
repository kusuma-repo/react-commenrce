import userActionTypes from './User.types';

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailPassword,
});

export const SignInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCEESS,
  payload: user,
});

export const SignInFailed = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = (error) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});
