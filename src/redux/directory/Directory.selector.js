import { createSelector } from 'reselect';

const initDirectory = (state) => state.directory;

export const selectDirectory = createSelector(
  [initDirectory],
  (directory) => directory.sections
);

export const selectDirectoryForOverview = createSelector(
  [selectDirectory],
  (directory) =>
    directory ? Object.keys(directory).map((key) => directory[key]) : []
);

export const sellectDirectoryIsFetching = createSelector(
  [initDirectory],
  (directory) => directory.isFetching
);

export const selectFecthIsLoaded = createSelector(
  [initDirectory],
  (directory) => !!directory.sections
);
