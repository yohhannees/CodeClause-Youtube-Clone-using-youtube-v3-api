import axios from 'axios';


const API_KEY='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';
const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    key: API_KEY,
  },
});

export default axiosInstance;
