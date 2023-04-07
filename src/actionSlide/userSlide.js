import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getALLUser } from '../services/userServices';

export const userSlide = createSlice({
    name: "userActionSlide",
    initialState: {
        userList: [],
        error: null,
        loading: "idle",
        hasMore: false,

    },
    reducers: {
    },
    extraReducers: (builder) => {




        //get list product
        builder.addCase(getListUser.pending, (state, action) => {
            state.loading = "loading";
        })
        builder.addCase(getListUser.fulfilled, (state, action) => {
            state.hasMore = action.payload.users.length === 0 ? false : true;
            state.userList = state.hasMore === false ? state.userList : state.userList.concat(action.payload.users);
            state.error = action.payload.errorCode;
            state.loading = "success";
        });


    },

});


export const getListUser = createAsyncThunk('/api/get-all-users', async (value) => {
    console.log(value);
    const response = await getALLUser(value);
    return response;
})
