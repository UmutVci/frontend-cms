import axios from 'axios'

import useAuth from '../features/auth/store/useAuth';

const instance = axios.create({
    baseURL: 'http://localhost:8080/api', // API root
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default instance;
