import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import Layout from "../Layout/Layout";
import { HiPlus, HiMinus, HiOutlineTrash } from "react-icons/hi";
import { MdCardGiftcard } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { removeVietnameseTones } from "../Handle/removeVietnameseTones";
import { changeWhiteSpaceToDash } from "../Handle/changeWhiteSpaceToDash";
import {
  cartSlide,
  deleteCartItem,
  updateCartDetail,
} from "../actionSlide/cartSlide";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

CartHome.propTypes = {};

function CartHome(props) {
  const cartDetail = useSelector((state) => state.cart.cartListItem.data);
  const { t } = useTranslation("cart");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [itemCheckToBuy, setItemCheckToBuy] = useState([]);
  const itemCheckToBuy = useSelector((state) => state.cart.cartItemCheckToBuy);
  const [totalPriceOder, setTotalPriceOrder] = useState(0);
  const [listArrCart, setListArrCart] = useState(cartDetail);
  const [dataUpdate, setDataUpdate] = useState({});
  const handleCheckToBuy = (e, data) => {
    const checked = e.target.checked;

    if (checked) {
      let newArr = [...itemCheckToBuy, data];
      dispatch(cartSlide.actions.setItemCheckToBuy(newArr));
    } else {
      let newArr = itemCheckToBuy.filter((item) => item.id !== data.id);
      dispatch(cartSlide.actions.setItemCheckToBuy(newArr));
    }
  };
  const handleCheckAll = (e) => {
    let checked = e.target.checked;
    if (checked) {
      // let newArr = [];

      // listArrCart.map((item) => {
      //   let data = {
      //     id: item.id,
      //     total_price: item.total_price,
      //     quantity: item.quantity,
      //   };

      //   newArr.push(data);
      // });
      // console.log("newArr", newArr);
      // setItemCheckToBuy(newArr);
      dispatch(cartSlide.actions.setItemCheckToBuy(listArrCart));
    } else {
      // setItemCheckToBuy([]);
      dispatch(cartSlide.actions.setItemCheckToBuy([]));
    }
  };
  useMemo(() => {
    setListArrCart(cartDetail);
  }, [cartDetail]);
  useEffect(() => {
    if (itemCheckToBuy.length !== 0) {
      let sum = 0;

      itemCheckToBuy.map((item) => (sum = sum + item.total_price));

      setTotalPriceOrder(sum);
    } else {
      setTotalPriceOrder(0);
    }
  }, [itemCheckToBuy]);

  const handleChangeCount = (e, id, name) => {
    let listArr = listArrCart;
    let itemToBuy = itemCheckToBuy;

    if (name === "plus") {
      listArr = listArrCart?.map((e) => {
        if (e.id == id) {
          return {
            ...e,
            quantity: e.quantity + 1,
            total_price: (e.total_price / e.quantity) * (e.quantity + 1),
          };
        }
        return e;
      });
    } else {
      listArr = listArrCart?.map((e) => {
        if (e.id == id) {
          return {
            ...e,
            quantity: e.quantity - 1,
            total_price: (e.total_price / e.quantity) * (e.quantity - 1),
          };
        }
        return e;
      });
    }

    if (itemCheckToBuy.length !== 0 && name === "plus") {
      itemToBuy = itemCheckToBuy.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            total_price:
              (item.total_price / item.quantity) * (item.quantity + 1),
          };
        }
        return item;
      });
    } else {
      itemToBuy = itemCheckToBuy.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
            total_price:
              (item.total_price / item.quantity) * (item.quantity - 1),
          };
        }
        return item;
      });
    }

    let data = listArrCart.find((e) => e.id === id);
    let data2 = {
      id: data.id,
      quantity: name === "plus" ? data.quantity + 1 : data.quantity - 1,
      total_price:
        name === "plus"
          ? (data.total_price / data.quantity) * (data.quantity + 1)
          : (data.total_price / data.quantity) * (data.quantity - 1),
    };

    setDataUpdate(data2);
    // setItemCheckToBuy(itemToBuy);
    dispatch(cartSlide.actions.setItemCheckToBuy(itemToBuy));
    setListArrCart(listArr);
  };

  const handleDeleteCartItem = (id) => {
    dispatch(deleteCartItem(id));
  };

  const handlePay = () => {
    if (itemCheckToBuy.length === 0) {
      toast.error("Vui lòng chọn sản phẩm để thanh toán!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      navigate("/checkout", { replace: true });
    }
  };

  useEffect(() => {
    if (Object.keys(dataUpdate).length !== 0) {
      const update = setTimeout(() => {
        dispatch(updateCartDetail(dataUpdate));
        console.log("call api");
      }, 500);
      return () => clearTimeout(update);
    }
  }, [dataUpdate]);

  return (
    <Layout>
      <div className=" w-full bg-gray-20 py-8 text-black">
        {/* table */}
        <table className="lg:container lg:m-auto  flex flex-col ">
          {/* header */}
          <thead>
            <th className="w-full shadow text-base text-gray-600 font-normal lg:flex xs:hidden xs:hi rounded-5 flex-wrap p-4  bg-white">
              <td className="w-1/12">
                <input type="checkbox" onChange={(e) => handleCheckAll(e)} />
              </td>
              <tr className="w-5/12 text-start font-semibold">
                {t("products")}
              </tr>
              <tr className="w-2/12 font-semibold">{t("unit-prices")}</tr>
              <tr className="w-1/12 font-semibold">{t("quantity")}</tr>
              <tr className="w-2/12 font-semibold">{t("total")}</tr>
              <tr className="w-1/12 font-semibold">{t("action")}</tr>
            </th>
          </thead>
          <tbody className="">
            {cartDetail.length !== 0 ? (
              listArrCart?.map((item) => {
                const data = {
                  id: item.id,
                  quantity: item.quantity,
                  cart_id: item.cart_id,
                  product_id: item.product_id,
                  total_price: item.total_price,
                  price: item.price,
                  note: item.note,
                  cartDetailToping: item.cartDetailToping,
                  cartDetailSize: item.cartDetailSize,
                  productCartDetailData: item.productCartDetailData,
                };
                // const data = { item };
                let myProductName = removeVietnameseTones(
                  item.productCartDetailData.name
                );
                let slug = changeWhiteSpaceToDash(myProductName);
                return (
                  <tr className="w-full my-2 shadow text-base rounded-5 font-normal flex flex-wrap p-4 text-center bg-white">
                    <td className="w-1/12 flex justify-center items-center">
                      <input
                        type="checkbox"
                        name="buyCheck"
                        onChange={(e) => handleCheckToBuy(e, data)}
                        checked={itemCheckToBuy.some((e) => e.id === item.id)}
                      />
                    </td>
                    <td className="lg:w-5/12 xs:11/12 text-start flex">
                      <img
                        src={item.productCartDetailData.image}
                        alt=""
                        className="max-h-20"
                      />
                      <div className="flex ml-4 flex-col">
                        <Link
                          to={{
                            pathname: "/product/" + slug,
                          }}
                          state={{
                            id: item.productCartDetailData.id,
                            category_id: item.productCartDetailData.category_id,
                          }}
                          relative="path"
                        >
                          <p className="w-full hover:text-orange-1">
                            {item.productCartDetailData.name}
                          </p>
                        </Link>
                        <p className="w-full text-gray-1 text-sm">
                          {t("size")}: {item.cartDetailSize?.name}
                        </p>

                        {item.cartDetailToping.length !== 0 &&
                          item.cartDetailToping?.map((itemTopping) => (
                            <p className="w-full text-gray-1 text-sm">
                              {itemTopping.name}
                            </p>
                          ))}
                        <p className="w-full text-red-500 text-sm">
                          {item.note}
                        </p>
                      </div>
                    </td>
                    <td className="w-2/12 lg:block xs:hidden">
                      <p className="w-full"> {item.price.toLocaleString()}₫</p>
                      <p className="w-full text-gray-1 text-sm">
                        {item.cartDetailSize?.price.toLocaleString()}₫
                      </p>
                      {item.cartDetailToping.length !== 0 &&
                        item.cartDetailToping?.map((itemTopping) => (
                          <p className="w-full text-gray-1 text-sm">
                            {itemTopping.price.toLocaleString()}₫
                          </p>
                        ))}
                    </td>
                    <td className="lg:w-1/12 xs:w-full flex justify-center items-center gap-4">
                      {/* <HiMinus
                        onClick={(e) => handleChangeCount(e, item.id, "minus")}
                        
                        className={`w-8 h-8 rounded-full p-1 ${
                          item.quantity === 1
                            ? "bg-gray-300 text-white"
                            : "bg-orange-2 text-white cursor-pointer"
                        }`}
                      /> */}

                      <button
                        onClick={(e) => handleChangeCount(e, item.id, "minus")}
                        disabled={item.quantity === 1 ? true : false}
                        className={`w-8 h-8 rounded-full ${
                          item.quantity === 1
                            ? "bg-gray-300 text-white"
                            : "bg-orange-2 text-white cursor-pointer"
                        }`}
                      >
                        <HiMinus className="w-8 h-8 rounded-full p-1" />
                      </button>
                      <span className="text-lg">{item.quantity}</span>
                      <button
                        onClick={(e) => handleChangeCount(e, item.id, "plus")}
                        className={`w-8 h-8 rounded-full
                           bg-orange-2 text-white cursor-pointer
                        `}
                      >
                        <HiPlus className="w-8 h-8 rounded-full p-1" />
                      </button>
                    </td>
                    <td className="lg:w-2/12 xs:w-10/12 flex text-red-500 lg:justify-center xs:justify-end items-center">
                      {item.total_price.toLocaleString()}₫
                    </td>
                    <td className="lg:w-1/12 xs:w-2/12 text-red-600 flex justify-center items-center">
                      <div
                        onClick={(e) => handleDeleteCartItem(item.id)}
                        className="flex justify-center items-center w-full cursor-pointer"
                      >
                        <HiOutlineTrash className="mr-2" /> {t("delete")}
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="w-full my-2 shadow text-base font-normal flex flex-wrap p-4 rounded-5 text-center bg-white">
                <td
                  colSpan={6}
                  className="w-full flex justify-center items-center"
                >
                  <p className="- font-semibold text-lg text-gray-400">
                    {t("empty-product")}
                  </p>
                </td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr className="w-full shadow text-base text-gray-500 font-normal flex flex-wrap p-4 rounded-5 bg-white">
              <td className="flex w-full lg:gap-4 xs:gap-2 justify-end border-b border-gray-300 pt-2 pb-4">
                <div className="flex justify-center items-center gap-2">
                  <MdCardGiftcard className="w-6 h-6 lg:block xs:hidden" />

                  <p className="lg:text-base xs:text-xs"> {t("promotion")}</p>
                </div>
                <div>
                  <input
                    className="border border-gray-300  text-sm pl-2 h-10 rounded-sm"
                    type="text"
                    placeholder={t("promotion")}
                  />
                </div>
                <div>
                  <button className="h-10 bg-orange-1 hover:bg-orange-2 px-2 py-2 rounded-sm lg:text-base xs:text-xs text-white">
                    {t("apply")}
                  </button>
                </div>
              </td>
              <td className="flex w-full gap-4 justify-center items-center text-center py-4 ">
                <div className="w-1/12 lg:block xs:hidden">
                  {/* <input type="checkbox" /> */}
                </div>
                <div className="w-5/12 text-start flex gap-4 lg:block xs:hidden">
                  {/* <p>Chọn tất cả</p>
                  <p>Xóa</p>
                  <p>Lưu vào yêu thích</p> */}
                </div>
                <div className="w-1/12 text-end lg:block xs:hidden"></div>
                <div className="lg:w-3/12 xs:w-8/12 text-end flex justify-between gap-4">
                  <p> {t("total-payment")} :</p>
                  <p className="- text-red-500">
                    {totalPriceOder.toLocaleString()}₫
                  </p>
                </div>
                <div className="lg:w-2/12 xs:w-4/12 flex justify-center h-10">
                  <button
                    onClick={handlePay}
                    className="h-10 w-full bg-orange-1 hover:bg-orange-2 px-2 py-2 rounded-sm text-white"
                  >
                    {t("pay")}
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </Layout>
  );
}

export default CartHome;
