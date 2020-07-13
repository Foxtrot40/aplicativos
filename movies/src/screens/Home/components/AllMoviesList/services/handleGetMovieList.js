import axiosInstance from 'movies/src/sharedServices/axiosInstance';
import reduxStore from 'movies/src/sharedServices/reduxStore';
import { SET_MOVIES_LIST } from 'movies/src/screens/Home/types';

const handleGetMovieList = () =>
  axiosInstance
    .get('/popular')
    .then(({ data: payload }) => {
      reduxStore.dispatch({ type: SET_MOVIES_LIST, payload });
      return true;
    })
    .catch(err => {
      console.log(err);
      return false;
    });

export default handleGetMovieList;
