import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { handelGetAllCartDetail, handelStoreCartDetail, handleDeleteCartItem, handleUpdateCartDetailById } from '../services/cartServices';
import { current } from '@reduxjs/toolkit'
import { toast } from "react-toastify";
export const cartSlide = createSlice({
    name: "cart",
    initialState: {
        cartListItem: {
            data: [],
            error: null,
            loading: false,
            loadingAdd: "idle",
            loadingUpdate: false,
            loadingDelete: false,
        },
        cartItemCheckToBuy: []
    },
    reducers: {
        setLoadingAdd: (state, action) => {
            state.cartListItem.loadingAdd = "idle";
        },
        setCartLogOut: (state, action) => {
            state.cartListItem.data = [];
        },
        setItemCheckToBuy: (state, action) => {
          
            state.cartItemCheckToBuy = action.payload;
        }
    }, extraReducers: (builder) => {
        builder.addCase(storeCartDetail.pending, (state, action) => {
            state.cartListItem.loadingAdd = "loading";
        });
        builder.addCase(storeCartDetail.fulfilled, (state, action) => {
            console.log(action.payload);
            state.cartListItem.data = action.payload.carUser;
            state.cartListItem.loadingAdd = "success";
        });
        builder.addCase(getAllCartDetail.pending, (state, action) => {
            state.cartListItem.loading = true;
        });
        builder.addCase(getAllCartDetail.fulfilled, (state, action) => {

            state.cartListItem.data = action.payload.carUser;
            state.cartListItem.loading = false;
        });
        builder.addCase(updateCartDetail.pending, (state, action) => {
            state.cartListItem.loadingUpdate = true
        });
        builder.addCase(updateCartDetail.fulfilled, (state, action) => {

            // state.cartListItem.data = itemToUpdate;
            let itemReUpdate = action.payload.cartDetailDataAfterUpdate
            let dataCheck = current(state.cartListItem.data);
            let dateUpdate = dataCheck.map((item) => {
                if (item.id === itemReUpdate.id) {

                    return {
                        ...item,
                        quantity: itemReUpdate.quantity,
                        total_price: itemReUpdate.total_price

                    };
                }
                return item;
            });
            state.cartListItem.data = dateUpdate
            state.cartListItem.loadingUpdate = false
        });
        builder.addCase(deleteCartItem.pending, (state, action) => {
            state.cartListItem.loadingDelete = true
        });
        builder.addCase(deleteCartItem.fulfilled, (state, action) => {

            // state.cartListItem.data = itemToUpdate;

            state.cartListItem.data = state.cartListItem.data.filter(e => e.id !== action.meta.arg)

            state.cartListItem.loadingDelete = false
            toast.success("Xóa sản phẩm thành công!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        });
    }
});


export const storeCartDetail = createAsyncThunk("/api/store-cart-detail", async (data) => {

    const res = await handelStoreCartDetail(data);
    return res;
});

export const getAllCartDetail = createAsyncThunk("/api/get-all-cart-detail", async (id) => {

    const res = await handelGetAllCartDetail(id);
    return res;
});

export const updateCartDetail = createAsyncThunk('/api/update-cart-detail', async (data) => {
    const res = await handleUpdateCartDetailById(data);
    return res;
})

export const deleteCartItem = createAsyncThunk('/api/delete-cart-detail', async (id) => {
    const res = await handleDeleteCartItem(id);
    return res;
})