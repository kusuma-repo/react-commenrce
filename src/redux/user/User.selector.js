import { createSelector } from 'reselect';

const selectUserSelector = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUserSelector],
  (user) => user.currentUsers
);
