import { createSelector } from 'reselect';

const selectCollections = (state) => state.itemCollection;

export const selectCollectionsItem = createSelector(
  [selectCollections],
  (itemCollection) => itemCollection.collections
);
