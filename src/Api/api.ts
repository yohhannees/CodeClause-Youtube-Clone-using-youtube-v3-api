import axios from 'axios';


const API_KEY='Place Api key here';
const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    key: API_KEY,
  },
});

export default axiosInstance;
