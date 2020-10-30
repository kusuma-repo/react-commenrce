import userActionTypes from './User.types';

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
