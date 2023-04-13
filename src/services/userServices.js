import axiosClient from "../axiosClient.js"

const handleUserLogin = (email, password) => {
    return axiosClient.post("/api/login", { email, password });
}

const handleUserRegister = (data) => {
    console.log("Create new user data", data);
    return axiosClient.post("/api/create-new-user", data);
}

const getALLUser = (value) => {
    console.log(value.id);
    console.log(value.limit);
    const id = value.id;
    const limit = value.limit
    const page = value.page
    return axiosClient.get(`/api/get-all-users?id=${id}&page=${page}&limit=${limit}`,);
}



const getUserInfo = (id) => {
    return axiosClient.get(`/api/get-all-users?id=${id}`);
}

const updateUser = (inputData) => {
    return axiosClient.put('/api/edit-user', inputData)
}

export {
    handleUserLogin,
    getALLUser,
    handleUserRegister,
    getUserInfo,
    updateUser
}