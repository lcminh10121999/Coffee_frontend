import axios from 'axios';


const axiosClient = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
});

axiosClient.interceptors.response.use(
    (response) => {
        const { data } = response;
        return response.data;
    }
);

export default axiosClient;