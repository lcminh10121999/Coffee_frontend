import axiosClient from "../axiosClient.js"

const handleUserLogin = (email, password) => {
    return axiosClient.post("/api/login", { email, password });
}

const getALLUser = (value) => {
    console.log(value.id);
    console.log(value.limit);
    const id = value.id;
    const limit = value.limit
    const page = value.page
    return axiosClient.get(`/api/get-all-users?id=${id}&page=${page}&limit=${limit}`,);
}
export {
    handleUserLogin,
    getALLUser
}