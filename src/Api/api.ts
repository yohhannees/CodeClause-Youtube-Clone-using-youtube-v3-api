import axios from 'axios';

const API_KEY = 'AIzaSyBN4vbtPGWuYDhgCUvebdn94QXp0GTZ9PU';

const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    key: API_KEY,
  },
});

export default axiosInstance;
