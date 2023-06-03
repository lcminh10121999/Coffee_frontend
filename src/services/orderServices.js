import axiosClient from "../axiosClient"


export const handleCreateOrderPay = (data) => {
    const res = axiosClient.post('/api/create-order', data);
    return res;
}

export const handleGetListOrder = (data) => {
    const id = data.id;
    const limit = data.limit
    const page = data.page
    let res = axiosClient.get(`/api/get-order?id=${id}&page=${page}&limit=${limit}`,);
    return res;
}




export const handleGetListOrderNotification = (data) => {
    const id = data.id;
    let res = axiosClient.get(`/api/get-order-notification?id=${id}`,);
    return res;
}

export const handleSearchOrder = (data) => {
    const keySearch = data.keySearch;
    const startDate = data.startDate;
    const endDate = data.endDate;
    const id = data.id;
  
    const limit = data.limit
    const page = data.page
    let res = axiosClient.get(`/api/search-order?startDate=${startDate}&endDate=${endDate}&keySearch=${keySearch}&id=${id}&page=${page}&limit=${limit}`,);
    return res;
}
export const handleAutoCompleteSearch = (data) => {
    const keySearch = data.keySearch;
    const startDate = data.startDate;
    const endDate = data.endDate;
    const id = data.id;
    const limit = data.limit
    const page = data.page
    let res = axiosClient.get(`/api/search-order?startDate=${startDate}&endDate=${endDate}&keySearch=${keySearch}&id=${id}&page=${page}&limit=${limit}`,);
    return res;
}
