import axios from 'axios';

const axiosTmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
});

export default axiosTmdb;
