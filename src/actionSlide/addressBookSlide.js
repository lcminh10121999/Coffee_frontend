import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { handleCreateAddressBook, handleGetAddressBook, handleDeleteAddressBook } from '../services/addressBookServices';
import locationJson from '../data/address.json'

export const addressBookSlide = createSlice({
    name: "addressBook",
    initialState: {
        addressBook: {
            data: [],
            loading: false,
            errCode: null,
            errMessage: null,
            hasMore: false,
            offset: 1,

        },
        locationAddressCity: {
            data: [],
            loading: false,
            errCode: null,
            errMessage: null,


        },

        locationAddressDistricts: {
            data: [],
            loading: false,
            errCode: null,
            errMessage: null,


        },
        locationAddressWards: {
            data: [],
            loading: false,
            errCode: null,
            errMessage: null,


        },
        newAddressBook: {
            loading: false,
            errCode: null,
            errMessage: null,
        },
        deleteAddressBook: {
            loading: "idle",
            errCode: null,
            errMessage: null,
        }

    },
    reducers: {
        getLocationCity: (state, action) => {
            state.locationAddressCity.data = locationJson.cities
        },
        getLocationDistricts: (state, action) => {
            state.locationAddressDistricts.data = locationJson.districts.filter((item) => item.parentcode === action.payload.cityCode)
        },
        getLocationWards: (state, action) => {
            state.locationAddressWards.data = locationJson.wards.filter((item) => item.parentcode === action.payload.districtsCode)
        },
        setErrorCreate: (state, action) => {
            state.newAddressBook.errCode = null;
            state.newAddressBook.errMessage = null;
        },
        setLoadingDeleteAddress: (state, action) => {
            state.deleteAddressBook.loading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getListAddressBook.pending, (state, action) => {
            state.addressBook.loading = true;
        });
        builder.addCase(getListAddressBook.fulfilled, (state, action) => {
            state.addressBook.data = action.payload.addressBook;
            // state.searchProduct.dataPageSearch = action.payload.result;
            state.addressBook.errCode = action.payload.errCode;
            state.addressBook.errMessage = action.payload.errMessage;
            state.addressBook.loading = false;


        });
        builder.addCase(createAddressBook.pending, (state, action) => {
            state.newAddressBook.loading = true;
        });
        builder.addCase(createAddressBook.fulfilled, (state, action) => {
            // state.addressBook.data = action.payload.addressBook;
            // state.searchProduct.dataPageSearch = action.payload.result;
            state.newAddressBook.errCode = action.payload.errCode;
            state.newAddressBook.errMessage = action.payload.errMessage;
            state.newAddressBook.loading = false;


        });
        builder.addCase(deleteAddressBook.pending, (state, action) => {
            state.deleteAddressBook.loading = "loading";
        });
        builder.addCase(deleteAddressBook.fulfilled, (state, action) => {
            // state.addressBook.data = action.payload.addressBook;
            // state.searchProduct.dataPageSearch = action.payload.result;
            state.deleteAddressBook.errCode = action.payload.errCode;
            state.deleteAddressBook.errMessage = action.payload.errMessage;
            state.deleteAddressBook.loading = "success";


        });
    }
});

export const getListAddressBook = createAsyncThunk('/api/get-list-address', async (data) => {
    const res = await handleGetAddressBook(data);
    return res;
});

export const createAddressBook = createAsyncThunk('/api/create-address-book', async (data) => {
    console.log("data 3", data);
    const res = await handleCreateAddressBook(data);

    return res;
});

export const deleteAddressBook = createAsyncThunk('/api/delete-address-book', async (data) => {
    console.log("data 3", data);
    const res = await handleDeleteAddressBook(data);

    return res;
});


