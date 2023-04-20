import axiosClient from "../axiosClient.js";

const getListProduct = (value) => {
    console.log(value.id);
    console.log(value.limit);
    const id = value.id;
    const limit = value.limit
    const page = value.page
    return axiosClient.get(`/api/get-product?id=${id}&page=${page}&limit=${limit}`,);
}

const getProductDetailById = (productId) => {
    const id = productId;

    return axiosClient.get(`/api/product-detail?id=${id}`);
}

export {
    getListProduct,
    getProductDetailById
}