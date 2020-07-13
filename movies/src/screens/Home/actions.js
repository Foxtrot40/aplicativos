import {
  SET_SHOW_TRENDING,
  SET_SHOW_NEW_RELEASES,
  SET_MOVIES_LIST,
} from './types';

export const setShowTrending = () => ({
  type: SET_SHOW_TRENDING,
});

export const setShowNewReleases = () => ({
  type: SET_SHOW_NEW_RELEASES,
});

export const setMoviesList = payload => ({
  type: SET_MOVIES_LIST,
  payload,
});
