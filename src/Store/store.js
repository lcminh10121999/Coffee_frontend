import { configureStore } from '@reduxjs/toolkit';
import { loginSlide } from '../actionSlide/loginSlide';

export const store = configureStore({
    reducer: {
        userLogin: loginSlide.reducer,
    },
});