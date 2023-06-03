import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HiUserCircle, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { orderSlide } from "../../actionSlide/orderSLide";
import { Link } from "react-router-dom";
ModalChooseAddressUser.propTypes = {};

function ModalChooseAddressUser(props) {
  const dispatch = useDispatch();
  const listAddressBook = useSelector(
    (state) => state.addressBook.addressBook.data
  );
  const addressCheck = useSelector((state) => state.order.addressUserCheck);
  const [addressChecked, setAddressChecked] = useState(addressCheck?.id);
  const [addressCheckToBuy, setAddressCheckToBuy] = useState(addressCheck);
  const handleCheckAddress = (item) => {
    setAddressChecked(item.id);
    setAddressCheckToBuy(item);
    // dispatch(orderSlide.actions.setAddressUserCheck(item));
  };

  const handleSubmitAddress = () => {
    console.log("avc");
    dispatch(orderSlide.actions.setAddressUserCheck(addressCheckToBuy));
    props.setShowModalChooseAddress(false);
  };

  useEffect(() => {
    if (!listAddressBook) {
      console.log("listAddressBook", listAddressBook);
    }
    if (!addressCheck) {
      setAddressChecked(1);
    }

    if (!listAddressBook) {
      let bug = {};
      listAddressBook?.map((item) => {
        if (item.id === 1) {
          bug = item;
        }
      });
      setAddressCheckToBuy(bug);
      dispatch(orderSlide.actions.setAddressUserCheck(bug));
    }
  }, []);

  return (
    <>
      <div
        onClick={() => props.setShowModalChooseAddress(false)}
        className="flex  bg-gray-300 opacity-70 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      ></div>
      <div className="flex text-black justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col gap-4 w-full max-w-xl bg-white outline-none focus:outline-none pt-6 pb-4 px-4">
          <div
            className="- absolute z-50 top-5 right-5 text-black hover:text-orange-2 cursor-pointer"
            onClick={() => props.setShowModalChooseAddress(false)}
          >
            <AiOutlineClose className="w-5 h-5" />
          </div>
          <div className="flex gap-4 mb-4 justify-center">
            <HiOutlineLocationMarker className="w-8 h-8  text-primary-500 " />
            <h3 className="text-2xl font-semibold text-primary-500">
              Chọn Địa chỉ
            </h3>
          </div>
          <div className="w-full flex gap-2  overflow-y-auto h-80 flex-col">
            {listAddressBook?.length !== 0 ? (
              listAddressBook?.map((item) => {
                return (
                  <div className="flex w-full ">
                    <div className="w-1/12 flex items-center  justify-center">
                      <input
                        type="radio"
                        className="w-5 h-5"
                        name="user-address"
                        value={item.id}
                        id="1"
                        onClick={() => handleCheckAddress(item)}
                        checked={addressChecked == item.id ? true : false}
                      />
                    </div>

                    <label
                      htmlFor={item.id}
                      className={`w-11/12 flex border rounded  p-4 ${
                        addressChecked === item.id
                          ? "border-orange-2"
                          : "border-gray-300"
                      }`}
                    >
                      <div className="flex w-10/12">
                        <div className="w-full flex flex-wrap  gap-4 flex-col">
                          <div className="flex">
                            <p className="font-semibold text-sn self-center">
                              {item.name}
                            </p>
                            <div className="w-2 border-l-2 text-sm  border-orange-1 ml-3 mr-2"></div>
                            <p className="self-center"> {item.phone}</p>
                            {/* <div className="w-2 border-l-2 text-xs  border-orange-1 ml-3 mr-2"></div> */}
                            {/* <p className="ml-4 test-sm text-green-600 ">Mặc định</p> */}
                          </div>
                          <div className="flex gap-2 flex-col w-full">
                            <p className=" text-sm "> {item.email}</p>

                            <p className="- text-xs text-gray-1">
                              {item.address}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-2/12  flex flex-wrap justify-center gap-4 items-center flex-col">
                        <div className="flex items-center justify-center gap-4 w-full">
                          {/* <button
                            // onClick={(e) => handleSubmitAddress()}
                            className="text-blue-400 text-sm hover:text-blue-800"
                          >
                            Xac Nhan
                          </button>
                          <button
                            // onClick={(e) =>
                            //   props.setShowModalChooseAddress(false)
                            // }
                            className="text-primary-500 hidden hover:text-red-700"
                          >
                            Huy
                          </button> */}
                        </div>
                      </div>
                    </label>
                  </div>
                );
              })
            ) : (
              <div className="w-full h-full flex flex-col items-center gap-3 justify-center relative">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3595/3595587.png"
                  alt=""
                  className=" h-40 w-auto"
                />
                <p className="- pl-2  left-96 bottom-0 font-semibold text-lg text-gray-400">
                  Không có địa chỉ nào
                </p>
                <Link
                  to={"/user-info/user-address"}
                  className="rounded px-4 py-2 text-white bg-orange-1 hover:bg-orange-2"
                >
                  Tạo mới
                </Link>
              </div>
            )}

            {/* <div className="flex w-full">
              <div className="w-1/12 flex items-center justify-center">
                <input
                  type="radio"
                  className="w-5 h-5"
                  name="user-address"
                  value={"2"}
                  id="2"
                  onClick={() => handleCheckAddress("2")}
                  checked={addressChecked === "2"}
                />
              </div>

              <label
                htmlFor="2"
                className={`w-11/12 flex border rounded  p-4 ${
                  addressChecked === "2" ? "border-orange-2" : "border-gray-300"
                }`}
              >
                <div className="flex w-9/12">
                  <div className="w-full flex flex-wrap flex-col">
                    <div className="flex">
                      <p className="font-semibold self-center">Lê Công Minh</p>
                      <div className="w-2 border-l-2 border-orange-1 ml-3 mr-2"></div>
                      <p className="self-center">0704549000</p>
                    </div>
                    <div className="flex flex-col w-full">
                      <p className="- text-sm text-gray-1">Nhà riêng</p>
                      <p className="- text-sm text-gray-1">64/69 La Thọ 2</p>
                      <p className="- text-sm text-gray-1">
                        điện hòa điện bàn quảng nám
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-3/12  flex flex-wrap justify-center gap-4 items-center flex-col">
                  <div className="flex flex-col items-center justify-center gap-4 w-full">
                    <div className="flex text-sm items-center justify-center gap-4 w-full">
                      <a href="" className="text-blue-400 hover:text-blue-800">
                        Cập Nhật
                      </a>
                      <a
                        href=""
                        className="text-primary-500 hover:text-red-700"
                      >
                        Xóa
                      </a>
                    </div>
                    <div className="w-full flex justify-center">
                      <button className="text-sm text-green-600 hover:text-green-800 ">
                        Thiết lặp mặc định
                      </button>
                    </div>
                  </div>
                </div>
              </label>
            </div> */}
          </div>
          <div className="w-full  flex gap-4 justify-center text-white">
            <button
              onClick={(e) => handleSubmitAddress()}
              className="px-4 py-2 rounded bg-orange-1 hover:bg-orange-2"
            >
              Chọn
            </button>
            <button
              className="px-4 py-2 rounded bg-primary-500 hover:bg-red-500"
              onClick={() => props.setShowModalChooseAddress(false)}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalChooseAddressUser;
