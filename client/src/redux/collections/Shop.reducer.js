import CollectionTypes from './Shop.types';
const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const collectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case CollectionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case CollectionTypes.FETCH_COLLECTION_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default collectionsReducer;
