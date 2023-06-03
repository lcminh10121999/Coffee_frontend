import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getListProduct, getProductDetailById, getProductSellCount, searchProduct } from '../services/productServies';


export const productSlide = createSlice({
    name: "product",
    initialState: {
        productList: {
            data: [],
            error: null,
            loading: false,
            hasMore: false,
            offset: 1,
            loadingChangeCategory: false
        },
        productListSame: {
            data: [],
            error: null,
            loading: false,
        },
        productDetail: {
            data: {},
            error: null,
            loading: false
        },
        productSellCount: {
            data: [],
            error: null,
            loading: false,
        },
        searchProduct: {
            data: [],
            dataPageSearch: [],

            loadingPageSearch: 'idle',
            error: null,
            loading: false,
            errorCode: null
        },
    },
    reducers: {
        setOffSetProduct: (state, action) => {
            state.productList.offset = action.payload;
        },
        setSearchProductEmpty: (state, action) => {
            state.searchProduct.data = action.payload
        },
        setSearchProductLoading: (state, action) => {
            state.searchProduct.loading = action.payload
        },
        setGetProductBiCategoryIdLoading: (state, action) => {
            state.productList.loadingChangeCategory = action.payload
        },
        setPageSearchLoading: (state, action) => {
            state.searchProduct.loadingPageSearch = action.payload
        },
        setPageResultSearch: (state, action) => {
            state.searchProduct.dataPageSearch = action.payload
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
            state.productList.loadingChangeCategory = false;
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
        builder.addCase(getListProductSame.pending, (state, action) => {
            state.productListSame.loading = true;
        });

        builder.addCase(getListProductSame.fulfilled, (state, action) => {
            state.productListSame.data = action.payload.product
            state.productListSame.error = action.payload.errMessage;
            state.productListSame.loading = false;

        });
        builder.addCase(getProductDetail.pending, (state, action) => {
            state.productDetail.loading = true;
        });
        builder.addCase(getProductDetail.fulfilled, (state, action) => {
            state.productDetail.data = action.payload.productDetail;
            state.productDetail.error = action.payload.errMessage;
            state.productDetail.loading = false;
        });
        builder.addCase(handleGetProductSellCount.pending, (state, action) => {
            state.productSellCount.loading = true;
        });
        builder.addCase(handleGetProductSellCount.fulfilled, (state, action) => {
            state.productSellCount.data = action.payload.productSellCount;
            state.productSellCount.error = action.payload.errMessage;
            state.productSellCount.loading = false;
        });

        builder.addCase(handleSearchProduct.pending, (state, action) => {
            state.searchProduct.loading = true;
        });
        builder.addCase(handleSearchProduct.fulfilled, (state, action) => {
            console.log("action.payload.errorCode", action.payload.errorCode);
            state.searchProduct.data = action.payload.result;
            state.searchProduct.dataPageSearch = action.payload.result;
            state.searchProduct.errorCode = action.payload.errCode;
            state.searchProduct.error = action.payload.errMessage;
            state.searchProduct.loading = false;


        });

    },


});


export const getListProductSlide = createAsyncThunk("/api/get-product", async (data) => {
    const res = await getListProduct(data);
    return res;
});
export const getListProductSame = createAsyncThunk("/api/get-product-same", async (data) => {
    const res = await getListProduct(data);
    return res;
});


export const getProductDetail = createAsyncThunk("/api/product-detail", async (productId) => {
    const res = await getProductDetailById(productId);
    return res;
})
export const handleGetProductSellCount = createAsyncThunk("/api/get-product-sell-count", async (productId) => {
    const res = await getProductSellCount();
    return res;
})

export const handleSearchProduct = createAsyncThunk("/api/search-product", async (data) => {
    const res = await searchProduct(data);
    return res;
})