import axios from 'axios';
import { BASE_URL } from './apiPaths';
// import { config } from 'node:process';
// import { access } from 'node:fs';
// import { error } from 'node:console';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 80000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

//Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        //console.log("Interceptor Token:", token); // 👈 DEBUG

        if( token ) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

//Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response?.status === 401) {
            console.error("401 Unauthorized - token not sent or invalid");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;