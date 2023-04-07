import { configureStore } from '@reduxjs/toolkit';
import { loginSlide } from '../actionSlide/loginSlide';
import { userSlide } from '../actionSlide/userSlide';

export const store = configureStore({
    reducer: {
        userLogin: loginSlide.reducer,
        userActionSlide: userSlide.reducer,
    },
});