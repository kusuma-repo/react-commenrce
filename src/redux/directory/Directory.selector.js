import { createSelector } from 'reselect';

const initDirectory = (state) => state.directory;

export const selectDirectory = createSelector(
  [initDirectory],
  (directory) => directory.sections
);
