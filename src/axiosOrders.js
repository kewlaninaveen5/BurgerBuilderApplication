import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://burger-builder-project-76b2a.firebaseio.com/'
});

export default axiosInstance;