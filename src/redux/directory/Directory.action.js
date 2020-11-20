import DirectoryTypes from './Directory.types';

export const fetchdirectoryStart = () => ({
  type: DirectoryTypes.DIRECTORY_FETCH_START,
});

export const fetchdirectorySuccess = (directorymap) => ({
  type: DirectoryTypes.DIRECTORY_FETCH_SUCCESS,
  payload: directorymap,
});

export const fetchdirectoryFailure = (errorMessage) => ({
  type: DirectoryTypes.DIRECTORY_FETCH_FAILURE,
  payload: errorMessage,
});
