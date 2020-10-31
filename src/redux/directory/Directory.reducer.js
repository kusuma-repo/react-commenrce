import INITIAL_DIRECTORY from './directory.data';

const INITIAL_STATE = {
  sections: INITIAL_DIRECTORY,
};

const DirectoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default DirectoryReducer;
