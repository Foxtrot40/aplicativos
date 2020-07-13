import {
  SET_SHOW_TRENDING,
  SET_SHOW_NEW_RELEASES,
  SET_MOVIES_LIST,
} from './types';

const initialState = {
  showTrending: true,
  showNewReleases: true,
  movies: [],
};

const movies = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_SHOW_TRENDING:
      return {
        ...state,
        showTrending: !state.showTrending,
        showNewReleases: true,
      };
    case SET_SHOW_NEW_RELEASES:
      return {
        ...state,
        showTrending: true,
        showNewReleases: !state.showNewReleases,
      };
    case SET_MOVIES_LIST:
      return {
        ...state,
        movies: payload,
      };
    default:
      return state;
  }
};

export default movies;
