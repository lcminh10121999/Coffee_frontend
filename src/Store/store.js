import { configureStore } from '@reduxjs/toolkit';
import { loginSlide } from '../actionSlide/loginSlide';
import { userSlide } from '../actionSlide/userSlide';
import { categorySlide } from '../actionSlide/categorySlide';
import { productSlide } from '../actionSlide/productSlide';
import { cartSlide } from '../actionSlide/cartSlide';
import { storeSlide } from '../actionSlide/storeSlide';
import { orderSlide } from '../actionSlide/orderSLide';
import { addressBookSlide } from '../actionSlide/addressBookSlide';

export const store = configureStore({
    reducer: {
        userLogin: loginSlide.reducer,
        userActionSlide: userSlide.reducer,
        category: categorySlide.reducer,
        product: productSlide.reducer,
        cart: cartSlide.reducer,
        store: storeSlide.reducer,
        order: orderSlide.reducer,
        addressBook: addressBookSlide.reducer
    },
});