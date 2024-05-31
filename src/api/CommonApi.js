import axios from "axios";

export const CommonApi = axios.create({
    baseURL: 'http://210.179.175.154:8010',
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        withCredentials: true
    }
 });