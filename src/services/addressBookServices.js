import axiosClient from "../axiosClient.js"

const handleGetAddressBook = async (data) => {
    return await axiosClient.get(`/api/get-address-book?id=${data.id}`,);
}

const handleCreateAddressBook = async (data) => {

    return await axiosClient.post(`/api/create-address-book`, data);
}

const handleDeleteAddressBook = async (dataAddress) => {
    console.log("dataAddress", dataAddress);
    return await axiosClient.delete(`/api/delete-address-book`, { data: { id: dataAddress.id } });
}

export {
    handleGetAddressBook,
    handleCreateAddressBook,
    handleDeleteAddressBook
}