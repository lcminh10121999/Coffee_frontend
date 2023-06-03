import axiosClient from "../axiosClient"


export const handleGetStoreList = async () => {
    const res = axiosClient.get('/api/get-store');
    return res
}