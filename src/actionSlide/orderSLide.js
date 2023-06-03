import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { current } from '@reduxjs/toolkit';
import { handleCreateOrderPay, handleGetListOrder, handleAutoCompleteSearch, handleGetListOrderNotification, handleSearchOrder } from '../services/orderServices';
import { toast } from "react-toastify";

export const orderSlide = createSlice({
    name: "order",
    initialState: {
        orderItem: {
            data: [],
            loading: false,
            errCode: null,
            errMessage: null,
            hasMore: false,
            offset: 1,

        },
        dataAutoCompleteSearch: {
            data: [],
            loading: false,
            errCode: null,
            errMessage: null,
        },
        addressUserCheck: {},
        loading: 'idle'
    },
    reducers: {
        setAddressUserCheck: (state, action) => {
            state.addressUserCheck = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setOffsetHistoryOrder: (state, action) => {
            state.orderItem.offset = action.payload
        },
        setLoadingSearch: (state, action) => {
            state.dataAutoCompleteSearch.loading = action.payload;
        },
        setAutoCompleteSearchData: (state, action) => {
            state.dataAutoCompleteSearch.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createOrderPay.pending, (state, action) => {
            state.loading = "loading";
        });
        builder.addCase(createOrderPay.fulfilled, (state, action) => {
            console.log(action.payload);
            // toast.success("Đặc hàng thành công!", {
            //     position: "top-right",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "colored",
            // });
            // state.storeList.data = action.payload.store;
            state.loading = "success";
        });
        builder.addCase(getListOrder.pending, (state, action) => {
            state.orderItem.loading = true;
        });
        builder.addCase(getListOrder.fulfilled, (state, action) => {

            // state.orderItem.data = action.payload.listOrder;

            state.orderItem.loading = false;


            if (action.meta.arg.more) {
                state.orderItem.data = state.orderItem.hasMore === false ? state.orderItem.data : state.orderItem.data.concat(action.payload.listOrder);
            } else {
                state.orderItem.data = action.payload.listOrder;
            }
            state.orderItem.hasMore = action.payload.listOrder.length < action.meta.arg.limit ? false : true;
        });
        builder.addCase(searchOrder.pending, (state, action) => {
            state.orderItem.loading = true;
        });
        builder.addCase(searchOrder.fulfilled, (state, action) => {
            if (action.meta.arg.more) {
                state.orderItem.data = state.orderItem.hasMore === false ? state.orderItem.data : state.orderItem.data.concat(action.payload.listOrder);
            } else {
                state.orderItem.data = action.payload.listOrder;
            }
            state.orderItem.hasMore = action.payload.listOrder.length < action.meta.arg.limit ? false : true;



        });

        builder.addCase(autoCompleteSearch.pending, (state, action) => {
            state.dataAutoCompleteSearch.loading = true;
        });
        builder.addCase(autoCompleteSearch.fulfilled, (state, action) => {
            console.log("action.payload.errorCode", action.payload.errorCode);
            state.dataAutoCompleteSearch.data = action.payload.listOrder;
            // state.searchProduct.dataPageSearch = action.payload.result;
            state.dataAutoCompleteSearch.errCode = action.payload.errCode;
            state.dataAutoCompleteSearch.errMessage = action.payload.errMessage;
            state.dataAutoCompleteSearch.loading = false;


        });
    }
});


export const createOrderPay = createAsyncThunk('/api/create-order', async (data) => {

    const res = await handleCreateOrderPay(data);
    return res;
});

export const getListOrder = createAsyncThunk('/api/get-order', async (data) => {
    const res = await handleGetListOrder(data);
    return res;
});

export const getListOrderNotification = createAsyncThunk('/api/get-order-notification', async (data) => {
    const res = await handleGetListOrderNotification(data);
    return res;
});


export const searchOrder = createAsyncThunk('/api/search-order', async (data) => {
    const res = await handleSearchOrder(data);
    return res;
});
export const autoCompleteSearch = createAsyncThunk('/api/auto-complete-search-order', async (data) => {
    const res = await handleAutoCompleteSearch(data);
    return res;
});
