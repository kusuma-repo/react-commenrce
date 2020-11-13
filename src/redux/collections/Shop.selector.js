import { createSelector } from 'reselect';

const selectCollections = (state) => state.itemCollection;

export const selectCollectionsItem = createSelector(
  [selectCollections],
  (itemCollection) => itemCollection.collections
);

export const selectCollectionForOverview = createSelector(
  [selectCollectionsItem],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollectionsItem], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const sellectCollectionIsFetching = createSelector(
  [selectCollections],
  (itemCollection) => itemCollection.isFetching
);

export const selectFecthIsLoaded = createSelector(
  [selectCollections],
  (itemCollection) => !!itemCollection.collections
);
