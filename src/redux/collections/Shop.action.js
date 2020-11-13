import CollectionTypes from './Shop.types';

export const fetchCollectionStart = () => ({
  type: CollectionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
  type: CollectionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: CollectionTypes.FETCH_COLLECTION_FAILED,
  payload: errorMessage,
});
