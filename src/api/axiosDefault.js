import axios from "axios";

axios.defaults.baseURL = 'https://world-of-craft-0e06bf8581a1.herokuapp.com/';
axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();