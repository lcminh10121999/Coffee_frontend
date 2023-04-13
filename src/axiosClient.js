import axios from 'axios';


const axiosClient = axios.create({
    baseURL: "http://localhost:8081",
    withCredentials: true,
});

axiosClient.interceptors.response.use(
    (response) => {
        const { data } = response;
        return response.data;
    }
);

export default axiosClient;