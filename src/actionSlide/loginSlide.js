import { createSlice } from "@reduxjs/toolkit";





export const loginSlide = createSlice({
    name: "userLogin",
    initialState: {
        userInfo: [],
        error: null,
        loadingLogin: "idle",
        logged: false,
    },
    reducers: {
        setUserLogin: (state, action) => {
            state.userInfo = action.payload;
        },
        setLoadingLogin: (state, action) => {
            state.loadingLogin = action.payload;
        },
        setLogged: (state, action) => {
            state.logged = action.payload;
        }
    },
    extraReducers: {},

});