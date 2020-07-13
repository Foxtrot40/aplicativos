import axiosTmdb from 'movies/src/sharedServices/tmdbAxios';

const fetchMovieDataFromTmdb = async tmdbId =>
  axiosTmdb
    .get(`/movie/${tmdbId}?api_key=e6482e5d29b9214ead86722c84188c59`)
    .then(({ data }) => data)
    .catch(err => console.log('err', err));

export default fetchMovieDataFromTmdb;
