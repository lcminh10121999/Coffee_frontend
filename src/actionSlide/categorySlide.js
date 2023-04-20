import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getListCategory } from '../services/categoryServices';


export const categorySlide = createSlice({
    name: "category",
    initialState: {
        listCategory: [],
        loading: "idle",
        errMessage: "",

    }, reducers: {},
    extraReducers: (builder) => {

        //get list category
        builder.addCase(getCategory.pending, (state, action) => {
            state.loading = "loading";
        })
        builder.addCase(getCategory.fulfilled, (state, action) => {

            if (action.payload.errCode === 0) {
                state.listCategory = action.payload.category;
                state.errMessage = action.payload.errMessage;
                state.loading = "success";
            } else {
                state.listCategory = action.payload.category;
                state.errMessage = action.payload.errMessage;
                state.loading = "success";
            }
            // state.listCategory = action.payload.category;
            // state.loading = "success";
        });
    },
})


export const getCategory = createAsyncThunk("/api/get-category", async () => {
    const res = await getListCategory();
    return res;
});