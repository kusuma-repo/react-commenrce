//import INITIAL_DIRECTORY from './directory.data';
import DirectoryTypes from './Directory.types';

const INITIAL_STATE = {
  sections: null,
  isFetching: false,
  errorMessage: undefined,
};

const DirectoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DirectoryTypes.DIRECTORY_FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case DirectoryTypes.DIRECTORY_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sections: action.payload,
      };
    case DirectoryTypes.DIRECTORY_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default DirectoryReducer;
