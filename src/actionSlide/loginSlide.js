import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserInfo, updateUser } from "../services/userServices";




export const loginSlide = createSlice({
    name: "userLogin",
    initialState: {
        userInfo: [],
        userLoginInfo: [],
        error: null,
        loadingLogin: "idle",
        loadingUpdateUser: "idle",
        loadingGetUserInfo: "idle",
        loadingRegister: "idle",
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
        },
        setUserLogout: (state, action) => {
            state.userInfo = []
        },
        setUserInfoLogout: (state, action) => {
            state.userLoginInfo = [];
            state.loadingGetUserInfo = "idle";
        },
        setLoadingRegister: (state, action) => {
            state.loadingRegister = action.payload;
        },
        setLoadingUpdateUser: (state, action) => {
            state.loadingUpdateUser = 'idle';
        }
    },
    extraReducers: (builder) => {
        //get list product
        builder.addCase(getUserLoggedById.pending, (state, action) => {
            state.loadingGetUserInfo = "loading";
        })
        builder.addCase(getUserLoggedById.fulfilled, (state, action) => {
            state.userLoginInfo = action.payload.users;
            state.loadingGetUserInfo = "success";
        });
        //update user
        builder.addCase(updateUserData.pending, (state, action) => {
            state.loadingUpdateUser = "loading";
        })
        builder.addCase(updateUserData.fulfilled, (state, action) => {
            action.payload.errCode === 0 ? state.userLoginInfo = action.payload.user : state.error = "error";
            state.loadingUpdateUser = "success";
            // state.userLoginInfo = action.payload.users;
            // state.loadingGetUserInfo = "success";
        });
    },

});

export const getUserLoggedById = createAsyncThunk('/api/get-all-users', async (id) => {

    const response = await getUserInfo(id);
    return response;
})

export const updateUserData = createAsyncThunk('/api/edit-user', async (data) => {
    const response = await updateUser(data)

    return response;
})
