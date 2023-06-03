import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit'
import { toast } from "react-toastify";
import { handleGetStoreList } from '../services/storeServices';
export const storeSlide = createSlice({
    name: "store",
    initialState: {
        storeList: {
            data: [],
            error: null,
            loading: false,

        },
        storeCheck: {}
    },
    reducers: {
        setStoreCheck: (state, action) => {
            state.storeCheck = action.payload
        }

    }, extraReducers: (builder) => {
        builder.addCase(getStoreList.pending, (state, action) => {
            state.storeList.loading = true;
        });
        builder.addCase(getStoreList.fulfilled, (state, action) => {
            console.log(action.payload);
            state.storeList.data = action.payload.store;
            state.storeList.loading = false;
        });

    }
});


export const getStoreList = createAsyncThunk("/api/get-store", async () => {

    const res = await handleGetStoreList();
    return res;
});
