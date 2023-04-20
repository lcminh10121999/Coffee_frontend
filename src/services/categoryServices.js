import axiosClient from "../axiosClient";


const getListCategory = async () => {
    const res = await axiosClient.get('/api/get-category');
    return res;
}

export {
    getListCategory
}