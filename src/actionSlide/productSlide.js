import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getListProduct, getProductDetailById } from '../services/productServies';


export const productSlide = createSlice({
    name: "product",
    initialState: {
        productList: {
            data: [],
            error: null,
            loading: false,
            hasMore: false,
            offset: 1,
        },
        productDetail: {
            data: {},
            error: null,
            loading: false
        }
    },
    reducers: {
        setOffSetProduct: (state, action) => {
            state.productList.offset = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getListProductSlide.pending, (state, action) => {
            state.productList.loading = true;
        });

        builder.addCase(getListProductSlide.fulfilled, (state, action) => {

            if (action.meta.arg.more) {
                state.productList.data = state.productList.hasMore === false ? state.productList.data : state.productList.data.concat(action.payload.product);
            } else {
                state.productList.data = action.payload.product;
            }
            state.productList.hasMore = action.payload.product.length < action.meta.arg.limit ? false : true;

            state.productList.error = action.payload.errMessage;
            state.productList.loading = false;
            // if (action.payload.errCode === 0) {
            //     state.productList.data = action.payload.product;
            //     state.productList.error = action.payload.errMessage;
            //     state.productList.loading = "success";
            // } else {
            //     state.listCategory = action.payload.category;
            //     state.errMessage = action.payload.errMessage;
            //     state.loading = "success";
            // }
            // state.listCategory = action.payload.category;
            // state.loading = "success";
        });
        builder.addCase(getProductDetail.pending, (state, action) => {
            state.productDetail.loading = true;
        });
        builder.addCase(getProductDetail.fulfilled, (state, action) => {
            state.productDetail.data = action.payload.productDetail;
            state.productDetail.error = action.payload.errMessage;
            state.productDetail.loading = false;
        });
    },


});


export const getListProductSlide = createAsyncThunk("/api/get-product", async (data) => {
    const res = await getListProduct(data);
    return res;
});


export const getProductDetail = createAsyncThunk("/api/product-detail", async (productId) => {
    const res = await getProductDetailById(productId);
    return res;
})