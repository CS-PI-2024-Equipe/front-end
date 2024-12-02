import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers:{
        'Content-Type':'application/json'
    }
});

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

/* api.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 403 && !error.config.url.includes("favicon.ico") &&
        !error.config.url.includes(".css") &&
        !error.config.url.includes(".js")) {
            window.location.href = '/unauthorized';
        }
        return Promise.reject(error);
    }
); */

export default api;