import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HiUserCircle, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
ModalChooseAddressUser.propTypes = {};

function ModalChooseAddressUser(props) {
  const [addressChecked, setAddressChecked] = useState();

  const handleCheckAddress = (value) => {
    setAddressChecked(value);
  };

  useEffect(() => {
    if (!addressChecked) {
      handleCheckAddress("1");
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
          <div className="w-full flex gap-4 h-64 overflow-hidden flex-col">
            <div className="flex w-full">
              <div className="w-1/12 flex items-center  justify-center">
                <input
                  type="radio"
                  className="w-5 h-5"
                  name="user-address"
                  value={"1"}
                  id="1"
                  onClick={() => handleCheckAddress("1")}
                  checked={addressChecked === "1"}
                />
              </div>

              <label
                htmlFor="1"
                className={`w-11/12 flex border rounded  p-4 ${
                  addressChecked === "1" ? "border-orange-2" : "border-gray-300"
                }`}
              >
                <div className="flex w-9/12">
                  <div className="w-full flex flex-wrap flex-col">
                    <div className="flex">
                      <p className="font-semibold self-center">Lê Công Minh</p>
                      <div className="w-2 border-l-2 border-orange-1 ml-3 mr-2"></div>
                      <p className="self-center">0704549000</p>
                      <p className="ml-4 test-sm text-green-600 ">Mặc định</p>
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
                  <div className="flex items-center justify-center gap-4 w-full">
                    <button
                      //   onClick={() => setShowModalAddAddress(true)}
                      className="text-blue-400 text-sm hover:text-blue-800"
                    >
                      Cập Nhật
                    </button>
                    <a
                      href=""
                      className="text-primary-500 hidden hover:text-red-700"
                    >
                      Xóa
                    </a>
                  </div>
                </div>
              </label>
            </div>
            <div className="flex w-full">
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
            </div>
          </div>
          <div className="w-full  flex gap-4 justify-center text-white">
            <button className="px-4 py-2 rounded bg-orange-1 hover:bg-orange-2">
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
