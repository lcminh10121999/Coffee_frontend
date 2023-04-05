import axiosClient from "../axiosClient.js"

const handleUserLogin = (email, password) => {
    return axiosClient.post("/api/login", { email, password });
}
export {
    handleUserLogin
}