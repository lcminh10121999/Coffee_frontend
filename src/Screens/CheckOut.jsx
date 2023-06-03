import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Layout from "../Layout/Layout";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsChevronRight } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import { FaCcVisa } from "react-icons/fa";
import { ORDER_TEST_DATA } from "../data/OrderTestData";
import ModalStore from "../components/ModalStore";
import ModalChooseAddressUser from "../components/MocalChoiseAddressUser";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_STORE } from "../data/bannerIgame";
import { createOrderPay, orderSlide } from "../actionSlide/orderSLide";
import { cartSlide } from "../actionSlide/cartSlide";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
CheckOut.propTypes = {};

function CheckOut(props) {
  //! fix chon cửa hàng lưu vào localstorage
  const [paypal, setPaypal] = useState();
  const { t } = useTranslation("checkout");
  // const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const itemCheckToBuy = useSelector((state) => state.cart.cartItemCheckToBuy);
  const loadingOrder = useSelector((state) => state.order.loading);
  console.log("loading", loadingOrder);
  const userLogin = useSelector((state) => state.userLogin.userInfo);
  const [showModalStore, setShowModalStore] = useState(false);
  const [showModalChooseAddress, setShowModalChooseAddress] = useState(false);
  const localStorageStore = localStorage.getItem("storeSeleted");
  const localStorageIdStore = localStorage.getItem("idStoreSeleted");
  const listAddressBook = useSelector(
    (state) => state.userLogin.userInfo.addressBookUser
  );
  const addressCheck = useSelector((state) => state.order.addressUserCheck);
  const [totalPrice, setTotalPrice] = useState(0);
  const [promotionPrice, setPromotionPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const storeCheck = useSelector((state) => state.store.storeCheck);
  const [itemPayMent, setItemPayMent] = useState({
    itemBuy: [],
    store: {},
    address: {},
    paypal: "",
    order_id: "",
    total: 0,
  });
  const defaultData = [
    {
      id: "all",
      name: "Chọn Cửa Hàng",
      address: "Chọn Cửa Hàng",
    },
  ];
  // if (!localStorageStore) {
  //   localStorage.setItem("storeSeleted", JSON.stringify(defaultData));
  // }
  // if (!localStorageIdStore) {
  //   localStorage.setItem("idStoreSeleted", JSON.stringify("all"));
  // }
  // console.log(JSON.parse(localStorageStore));
  // const [storeSelected, setStoreSelected] = useState(
  //   JSON.parse(localStorageStore)
  // );
  // const [storeSelect, setStoreSelect] = useState(
  //   JSON.parse(localStorageIdStore)
  // );

  const handleChangePaypal = (pay) => {
    setPaypal(pay);
  };

  useEffect(() => {
    if (itemCheckToBuy.length === 0) {
      navigate("/cart", { replace: true });
    }
    if (!paypal) {
      setPaypal("pay-1");
    }
    // if (!addressCheck) {
    //   let bug = {};
    //   listAddressBook?.map((item) => {
    //     if (item.id === 1) {
    //       bug = item;
    //     }
    //   });
    //   dispatch(orderSlide.actions.setAddressUserCheck(bug));
    // }
    let bug = {};
    listAddressBook?.map((item) => {
      if (item.id === 1) {
        bug = item;
      }
    });
    dispatch(orderSlide.actions.setAddressUserCheck(bug));
    // setStoreSelected(JSON.parse(localStorageStore));
    // setStoreSelect(JSON.parse(localStorageIdStore));
    // console.log("b");
  }, []);

  useEffect(() => {
    let sum = 0;
    itemCheckToBuy.map((item) => (sum += item.total_price));
    console.log("sum", sum);
    setTotalPrice(sum);
  }, [itemCheckToBuy]);

  useEffect(() => {
    if (loadingOrder === "success") {
      dispatch(cartSlide.actions.setItemCheckToBuy([]));
      // dispatch(orderSlide.actions.setLoading("idle"));
      // toast.success("Đặc hàng thành công!", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      // });
      navigate("/checkout-success", { replace: true });
    }
  }, [loadingOrder]);

  useEffect(() => {
    setItemPayMent({
      itemBuy: itemCheckToBuy,
      store: storeCheck,
      address: addressCheck,
      paypal: paypal,
      user_id: userLogin.id,
      total: totalPrice + deliveryPrice + promotionPrice,
    });
  }, [itemCheckToBuy, storeCheck, addressCheck, paypal]);

  const handleOrder = () => {
    console.log("itemPayMent", itemPayMent);
    dispatch(createOrderPay(itemPayMent));
  };

  return (
    <Layout>
      {showModalStore && (
        <ModalStore
          setShowModalStore={setShowModalStore}
          // storeSelected={storeSelected}
          // storeSelect={storeSelect}
          // setStoreSelect={setStoreSelect}
          // setStoreSelected={setStoreSelected}
        />
      )}
      {showModalChooseAddress && (
        <ModalChooseAddressUser
          setShowModalChooseAddress={setShowModalChooseAddress}
        />
      )}
      <div className="lg:container lg:mx-auto py-8 gap-8 flex flex-col  text-black">
        <div className="flex w-full  justify-center items-center gap-4">
          <IoBagCheckOutline className="w-8 h-8  text-primary-500" />
          <p className="text-2xl font-semibold text-primary-500">
            {t("Order")}
          </p>
        </div>
        <div className="flex lg:flex-row xs:flex-col w-full lg:gap-0 xs:gap-4 flex-wrap lg:px-10 xs:px-2">
          <div className="lg:w-1/2 xs:w-full gap-2 flex flex-col">
            <div className="- w-fit">
              <p className="text-black font-semibold text-lg pb-2 ">
                {t("delivery")}
              </p>
              <p className="border-b-2 border-orange-2 w-16"></p>
            </div>
            <div className="flex w-full flex-col gap-2 px-4">
              <p className="text-base font-semibold">Cửa hàng</p>
              <div className="w-full mt-4 flex gap-2">
                <div className="w-1/6">
                  <img
                    className="max-h-16 rounded-full"
                    src={IMAGE_STORE.image}
                    alt={IMAGE_STORE.name}
                  />
                </div>

                <div className="w-4/6 flex flex-col gap-1">
                  {/* {storeSelected.map((item) => {
                    return (
                      <> */}
                  <p className="- font-semibold">{storeCheck?.name}</p>
                  <p className="- text-gray-1">{storeCheck?.address}</p>
                  {/* </>
                    );
                  })} */}
                </div>
                <div className="w-1/6 flex justify-center items-center">
                  <a
                    onClick={() => setShowModalStore(true)}
                    className="- hover:text-orange-2"
                  >
                    <BsChevronRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col gap-2 px-4">
              <p className="text-base font-semibold">Nhận hàng</p>
              <div className="w-full flex gap-2">
                <div className="w-1/6">
                  <img
                    className="max-h-16 rounded-full object-fill"
                    src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png"
                    alt=""
                  />
                </div>

                <div className="w-4/6 flex flex-col gap-1">
                  <div className="flex gap-2">
                    <p className="- font-semibold">
                      {Object.keys(addressCheck).length !== 0
                        ? addressCheck?.name
                        : "vui lòng chọn địa chỉ"}
                    </p>
                    <p className="border-l-2 border-orange-2"></p>
                    <p className="- font-semibold">
                      {Object.keys(addressCheck).length !== 0
                        ? addressCheck?.phone
                        : "vui lòng chọn địa chỉ"}
                    </p>
                  </div>

                  <p className="- text-gray-1">
                    {Object.keys(addressCheck).length !== 0
                      ? addressCheck?.address
                      : "vui lòng chọn địa chỉ"}
                  </p>
                </div>
                <div className="w-1/6 flex justify-center items-center">
                  <a
                    onClick={() => {
                      setShowModalChooseAddress(true);
                    }}
                    className="- hover:text-orange-2"
                  >
                    <BsChevronRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 xs:w-full  flex flex-col gap-2">
            <div className="w-fit mb-4">
              <p className="text-black font-semibold text-lg pb-2 ">
                {t("selected-products")}
              </p>
              <p className="border-b-2 border-orange-2 w-16"></p>
            </div>
            <div className="flex gap-4 flex-col px-4">
              {/* {itemCheckToBuy.length !== 0 &&
              } */}
              {itemCheckToBuy?.map((item) => {
                return (
                  <div className="flex w-full gap-3">
                    <div className="w-3/4 flex">
                      <div className="w-1/4">
                        <img
                          src={item.productCartDetailData?.image}
                          className="max-h-16 rounded-full"
                          alt=""
                        />
                      </div>
                      <div className="w-3/4">
                        <p>
                          <span>{item.quantity} x </span>
                          {item.productCartDetailData?.name}
                        </p>
                        <p className="w-full text-gray-1 text-sm">
                          <span>{t("size")}: </span>
                          {item.cartDetailSize?.name}
                        </p>
                        {item.cartDetailToping?.map((i) => (
                          <p className="w-full text-gray-1 text-sm">{i.name}</p>
                        ))}
                      </div>
                    </div>
                    <div className="w-1/4 flex justify-end items-center text-primary-500">
                      <p>{item.total_price.toLocaleString()}₫</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:w-1/2 xs:w-full gap-2 flex flex-col">
            <div className="- w-fit">
              <p className="text-black font-semibold text-lg pb-2 ">
                {t("payment-methods")}
              </p>
              <p className="border-b-2 border-orange-2 w-16"></p>
            </div>
            <div className="flex mt-4 w-full flex-col gap-2">
              <div className="pl-28 flex gap-2 flex-wrap">
                <div
                  className="w-full  gap-4 flex items-center"
                  onClick={(e) => handleChangePaypal("pay-1")}
                >
                  <input
                    type="radio"
                    id="pay"
                    value="pay-1"
                    className={`w-5 h-5`}
                    name="paypal"
                    checked={paypal === "pay-1"}
                  />
                  <label
                    className={`- flex   items-center gap-2 text-lg ${
                      paypal === "pay-1" ? "text-orange-2" : "text-gray-1"
                    }`}
                    htmlFor="pay"
                  >
                    <span>
                      <FaMoneyBillAlt
                        className={`${
                          paypal === "pay-1" ? "text-orange-2" : "text-black"
                        }`}
                      />
                    </span>
                    {t("cash")}
                  </label>
                </div>
                <div
                  className="w-full gap-4 flex items-center"
                  onClick={(e) => handleChangePaypal("pay-2")}
                >
                  <input
                    type="radio"
                    id="pay2"
                    value="pay-2"
                    className="w-5 h-5"
                    name="paypal"
                    checked={paypal === "pay-2"}
                  />
                  <label
                    className={`- flex   items-center gap-2 text-lg ${
                      paypal === "pay-2" ? "text-orange-2" : "text-gray-1"
                    }`}
                    htmlFor="pay2"
                  >
                    <span>
                      <AiFillCreditCard
                        className={`${
                          paypal === "pay-2" ? "text-orange-2" : "text-black"
                        }`}
                      />
                    </span>
                    {t("bank")}
                  </label>
                </div>
                <div
                  className="w-full gap-4 flex items-center"
                  onClick={(e) => handleChangePaypal("pay-3")}
                >
                  <input
                    type="radio"
                    id="pay3"
                    value="pay-3"
                    className="w-5 h-5"
                    name="paypal"
                    checked={paypal === "pay-3"}
                  />
                  <label
                    className={`- flex   items-center gap-2 text-lg ${
                      paypal === "pay-3" ? "text-orange-2" : "text-gray-1"
                    }`}
                    htmlFor="pay3"
                  >
                    <span>
                      <FaCcVisa
                        className={`${
                          paypal === "pay-3" ? "text-orange-2" : "text-black"
                        }`}
                      />
                    </span>
                    {t("visa")}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xs:w-full  flex flex-col gap-2 ">
            <div className="w-fit mb-4">
              <p className="text-black font-semibold text-lg pb-2 ">
                {t("total")}
              </p>
              <p className="border-b-2 border-orange-2 w-16"></p>
            </div>
            <div className="w-full flex justify-between px-4">
              <div>
                <p> {t("total")}</p>
              </div>

              <div className="- text-primary-500">
                <p>{totalPrice.toLocaleString()}₫</p>
              </div>
            </div>
            <div className="w-full flex justify-between px-4">
              <div>
                <p> {t("delivery-charges")}</p>
              </div>

              <div className="- ">
                <p>{deliveryPrice.toLocaleString()}₫</p>
              </div>
            </div>
            <div className="w-full flex justify-between px-4">
              <div>
                <p> {t("promotion")}</p>
              </div>

              <div className="- ">
                <p>{promotionPrice.toLocaleString()}₫</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xs:w-full flex bg-gradient-to-r from-orange-2 ml-auto to-orange-1 justify-self-end justify-between rounded  p-4">
            <div className="- font-medium text-white">
              <p>{t("total-payment")}</p>
              <p>
                {(totalPrice + deliveryPrice + promotionPrice).toLocaleString()}
                ₫
              </p>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleOrder}
                disabled={loadingOrder === "loading" ? true : false}
                className={`px-4 py-2 rounded   ${
                  loadingOrder === "loading"
                    ? "bg-gray-300"
                    : "text-orange-1 hover:text-orange-2 bg-white hover:bg-gray-300"
                }`}
              >
                {loadingOrder === "loading" ? (
                  <PulseLoader size={14} color="#fa8c16" />
                ) : (
                  t("pay")
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CheckOut;
