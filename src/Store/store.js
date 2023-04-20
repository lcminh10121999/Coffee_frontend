import { configureStore } from '@reduxjs/toolkit';
import { loginSlide } from '../actionSlide/loginSlide';
import { userSlide } from '../actionSlide/userSlide';
import { categorySlide } from '../actionSlide/categorySlide';
import { productSlide } from '../actionSlide/productSlide';

export const store = configureStore({
    reducer: {
        userLogin: loginSlide.reducer,
        userActionSlide: userSlide.reducer,
        category: categorySlide.reducer,
        product: productSlide.reducer,
    },
});