import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.trakt.tv/movies',
  headers: {
    'Content-Type': 'application/json',
    'trakt-api-version': 2,
    'trakt-api-key':
      'd7e1484c7cb0f61fcfa9064eead47cbfb2a31542a50ad76c8e057de9a4e5ff31',
  },
  responseType: 'json',
});

export default axiosInstance;
