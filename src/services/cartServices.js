import axiosClient from "../axiosClient";



const handelStoreCartDetail = async (data) => {
    const res = await axiosClient.post("/api/store-cart-detail", data);
    return res;
}

const handelGetAllCartDetail = async (id) => {
    const res = await axiosClient.get(`/api/get-all-cart-detail?id=${id}`);
    return res;
}

const handleUpdateCartDetailById = async (data) => {
    const res = await axiosClient.put('/api/update-cart-detail', data);
    return res;
}

const handleDeleteCartItem = async (id) => {
    const res = await axiosClient.delete('/api/delete-cart-detail', { data: { id: id } });
    return res;
}

export {
    handelStoreCartDetail,
    handelGetAllCartDetail,
    handleUpdateCartDetailById,
    handleDeleteCartItem
}