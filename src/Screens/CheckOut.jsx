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

CheckOut.propTypes = {};

function CheckOut(props) {
  //! fix chon cửa hàng lưu vào localstorage
  const [paypal, setPaypal] = useState();
  const [showModalStore, setShowModalStore] = useState(false);
  const [showModalChooseAddress, setShowModalChooseAddress] = useState(false);
  const localStorageStore = localStorage.getItem("storeSeleted");
  const localStorageIdStore = localStorage.getItem("idStoreSeleted");

  const defaultData = [
    {
      id: "all",
      name: "Chọn Cửa Hàng",
      address: "Chọn Cửa Hàng",
    },
  ];
  if (!localStorageStore) {
    localStorage.setItem("storeSeleted", JSON.stringify(defaultData));
  }
  if (!localStorageIdStore) {
    localStorage.setItem("idStoreSeleted", JSON.stringify("all"));
  }
  console.log(JSON.parse(localStorageStore));
  const [storeSelected, setStoreSelected] = useState(
    JSON.parse(localStorageStore)
  );
  const [storeSelect, setStoreSelect] = useState(
    JSON.parse(localStorageIdStore)
  );

  const handleChangePaypal = (pay) => {
    setPaypal(pay);
  };

  useEffect(() => {
    if (!paypal) {
      setPaypal("pay-1");
    }
    setStoreSelected(JSON.parse(localStorageStore));
    setStoreSelect(JSON.parse(localStorageIdStore));
    console.log("b");
  }, [localStorageIdStore, localStorageStore]);

  return (
    <Layout>
      {showModalStore && (
        <ModalStore
          setShowModalStore={setShowModalStore}
          storeSelected={storeSelected}
          storeSelect={storeSelect}
          setStoreSelect={setStoreSelect}
          setStoreSelected={setStoreSelected}
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
          <p className="text-2xl font-semibold text-primary-500"> Dặt hàng</p>
        </div>
        <div className="flex lg:flex-row xs:flex-col w-full lg:gap-0 xs:gap-4 flex-wrap lg:px-10 xs:px-2">
          <div className="lg:w-1/2 xs:w-full gap-2 flex flex-col">
            <div className="- w-fit">
              <p className="text-black font-semibold text-lg pb-2 ">
                Giao Hàng
              </p>
              <p className="border-b-2 border-orange-2 w-16"></p>
            </div>
            <div className="flex w-full flex-col gap-2 px-4">
              {/* <p className="text-base font-semibold">Cửa hàng</p> */}
              <div className="w-full mt-4 flex gap-2">
                <div className="w-1/6">
                  <img
                    className="max-h-16 rounded-full"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>

                <div className="w-4/6 flex flex-col gap-1">
                  {storeSelected.map((item) => {
                    return (
                      <>
                        <p className="- font-semibold">{item.name}</p>
                        <p className="- text-gray-1">{item.address}</p>
                      </>
                    );
                  })}
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
              {/* <p className="text-base font-semibold">Nhận hàng</p> */}
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
                    <p className="- font-semibold">Lê Công Minh</p>
                    <p className="border-l-2 border-orange-2"></p>
                    <p className="- font-semibold">0704549000</p>
                  </div>

                  <p className="- text-gray-1">
                    157, Bùi Tá Hàn, Khuê Mỹ, Ngũ Hành Sơn Đà Nẳng
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
                Các món đã chọn
              </p>
              <p className="border-b-2 border-orange-2 w-16"></p>
            </div>
            <div className="flex gap-4 flex-col px-4">
              <div className="flex w-full gap-3">
                <div className="w-3/4 flex">
                  <div className="w-1/4">
                    <img
                      src="https://product.hstatic.net/1000075078/product/cloudfee-hanh-nhan-nuong_ba00ec49e2c141ce957f0015cc52ffe7_large.png"
                      className="max-h-16 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-3/4">
                    <p>
                      <span>2 x </span>CloudFee Hạnh Nhân Nướng
                    </p>
                    <p className="w-full text-gray-1 text-sm">
                      <span>Size: </span>Vừa
                    </p>
                    <p className="w-full text-gray-1 text-sm">
                      Thạch Cà Phê x 1
                    </p>
                    <p className="w-full text-gray-1 text-sm">
                      Shot Espresso x 2
                    </p>
                    <p className="w-full text-gray-1 text-sm">
                      Sốt Caramel x 1
                    </p>
                  </div>
                </div>
                <div className="w-1/4 flex justify-end items-center text-primary-500">
                  <p>95.000đ</p>
                </div>
              </div>
              <div className="flex w-full gap-3">
                <div className="w-3/4 flex">
                  <div className="w-1/4">
                    <img
                      src="https://product.hstatic.net/1000075078/product/cloudfee-hanh-nhan-nuong_ba00ec49e2c141ce957f0015cc52ffe7_large.png"
                      className="max-h-16 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-3/4">
                    <p>
                      <span>2 x </span>CloudFee Hạnh Nhân Nướng
                    </p>
                    <p className="w-full text-gray-1 text-sm">
                      <span>Size: </span>Vừa
                    </p>
                    <p className="w-full text-gray-1 text-sm">
                      Thạch Cà Phê x 1
                    </p>
                    <p className="w-full text-gray-1 text-sm">
                      Shot Espresso x 2
                    </p>
                    <p className="w-full text-gray-1 text-sm">
                      Sốt Caramel x 1
                    </p>
                  </div>
                </div>
                <div className="w-1/4 flex justify-end items-center text-primary-500">
                  <p>95.000đ</p>
                </div>
              </div>
              <div className="flex w-full gap-3">
                <div className="w-3/4 flex">
                  <div className="w-1/4">
                    <img
                      src="https://product.hstatic.net/1000075078/product/cloudfee-hanh-nhan-nuong_ba00ec49e2c141ce957f0015cc52ffe7_large.png"
                      className="max-h-16 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-3/4">
                    <p>
                      <span>2 x </span>CloudFee Hạnh Nhân Nướng
                    </p>
                    <p className="w-full text-gray-1 text-sm">
                      <span>Size: </span>Vừa
                    </p>
                    <p className="w-full text-gray-1 text-sm">
                      Thạch Cà Phê x 1
                    </p>
                    <p className="w-full text-gray-1 text-sm">
                      Shot Espresso x 2
                    </p>
                    <p className="w-full text-gray-1 text-sm">
                      Sốt Caramel x 1
                    </p>
                  </div>
                </div>
                <div className="w-1/4 flex justify-end items-center text-primary-500">
                  <p>95.000đ</p>
                </div>
              </div>
              <div className="flex w-full gap-3">
                <div className="w-3/4 flex">
                  <div className="w-1/4">
                    <img
                      src="https://product.hstatic.net/1000075078/product/cloudfee-hanh-nhan-nuong_ba00ec49e2c141ce957f0015cc52ffe7_large.png"
                      className="max-h-16 rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="w-3/4">
                    <p>
                      <span>2 x </span>CloudFee Hạnh Nhân Nướng
                    </p>
                    <p className="w-full text-gray-1 text-sm">
                      <span>Size: </span>Vừa
                    </p>
                    <p className="w-full text-gray-1 text-sm">
                      Thạch Cà Phê x 1
                    </p>
                    <p className="w-full text-gray-1 text-sm">
                      Shot Espresso x 2
                    </p>
                    <p className="w-full text-gray-1 text-sm">
                      Sốt Caramel x 1
                    </p>
                  </div>
                </div>
                <div className="w-1/4 flex justify-end items-center text-primary-500">
                  <p>95.000đ</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xs:w-full gap-2 flex flex-col">
            <div className="- w-fit">
              <p className="text-black font-semibold text-lg pb-2 ">
                Phuong Thức thanh Toán
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
                    Tiền mặt
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
                    Thẻ Ngân Hàng Nội Địa
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
                    Thẻ Thanh Toán Quốc Tế
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xs:w-full  flex flex-col gap-2 ">
            <div className="w-fit mb-4">
              <p className="text-black font-semibold text-lg pb-2 ">
                Tổng cộng
              </p>
              <p className="border-b-2 border-orange-2 w-16"></p>
            </div>
            <div className="w-full flex justify-between px-4">
              <div>
                <p>Thành tiền</p>
              </div>

              <div className="- text-primary-500">
                <p>310.000đ</p>
              </div>
            </div>
            <div className="w-full flex justify-between px-4">
              <div>
                <p>Phí giao hàng</p>
              </div>

              <div className="- ">
                <p>310.000đ</p>
              </div>
            </div>
            <div className="w-full flex justify-between px-4">
              <div>
                <p>Khuyến mãi</p>
              </div>

              <div className="- ">
                <p>310.000đ</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xs:w-full flex bg-gradient-to-r from-orange-2 ml-auto to-orange-1 justify-self-end justify-between rounded  p-4">
            <div className="- font-medium text-white">
              <p>Tổng tiền</p>
              <p>328.000đ</p>
            </div>
            <div className="flex items-center">
              <button className="px-4 py-2 rounded bg-white hover:bg-gray-300 text-orange-1 hover:text-orange-2">
                Dặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CheckOut;
