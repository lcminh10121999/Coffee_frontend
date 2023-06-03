import axiosClient from "../axiosClient.js";

const getListProduct = (value) => {
    console.log(value.id);
    console.log(value.limit);
    const id = value.id;
    const limit = value.limit
    const page = value.page
    let sortColumn = value.sortColumn
    let sortType = value.sortType
    return axiosClient.get(`/api/get-product?id=${id}&page=${page}&limit=${limit}&sortColumn=${sortColumn}&sortType=${sortType}`,);
}

const getProductDetailById = (productId) => {
    const id = productId;

    return axiosClient.get(`/api/product-detail?id=${id}`);
}

const getProductSellCount = () => {
    let res = axiosClient.get(`/api/get-product-sell-count`);
    return res;
}

const searchProduct = (data) => {
    let keySearch = data.key;
    let limit = data.limit;
    let res = axiosClient.get(`/api/search-product?key=${keySearch}&limit=${limit}`);
    return res;
}

export {
    getListProduct,
    getProductDetailById,
    getProductSellCount,
    searchProduct
}