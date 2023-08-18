import axios from 'axios';


const API_KEY='api key';
const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    key: API_KEY,
  },
});

export default axiosInstance;
