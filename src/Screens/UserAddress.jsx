import React, { useState } from "react";
import PropTypes from "prop-types";
import UserProfile from "./UserProfile";
import { FiPlus } from "react-icons/fi";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineHistory,
} from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { HiUserCircle, HiOutlineLocationMarker } from "react-icons/hi";
import ModalAddressUser from "../components/ModalAddressUser";
UserAddress.propTypes = {};

function UserAddress(props) {
  const [showModalAddAddress, setShowModalAddAddress] = useState(false);
  console.log(showModalAddAddress);

  return (
    <UserProfile>
      {showModalAddAddress && (
        <ModalAddressUser showModalAdd={setShowModalAddAddress} />
      )}

      <div className="w-full min-h-haft-screen">
        <div className="w-full mb-4 flex justify-center items-center gap-2">
          <HiOutlineLocationMarker className="w-8 h-8  text-primary-500 " />
          <p className="text-2xl font-semibold text-primary-500">Sổ địa chỉ</p>
        </div>
        <div className="flex flex-col gap-4 flex-wrap">
          <div className="w-full flex justify-end items-center">
            <button
              onClick={() => setShowModalAddAddress(true)}
              className="flex items-center bg-orange-1 hover:bg-orange-2 text-white rounded py-2 px-4"
            >
              <FiPlus className="mr-2" />
              Thêm địa chỉ mới
            </button>
          </div>
          <div className="w-full flex gap-4 flex-col">
            <div className="w-full flex border-b pb-4 border-gray-400">
              <div className="flex w-5/6">
                <div className="w-full flex flex-wrap flex-col gap-4">
                  <div className="flex">
                    <p className="font-semibold self-center">Lê Công Minh</p>
                    <div className="w-2 border-l-2 border-orange-1 ml-3 mr-2"></div>
                    <p className="self-center">0704549000</p>
                    <p className="ml-4 text-sm text-green-600 ">Mặc định</p>
                  </div>
                  <div className="flex flex-col w-1/2">
                    <p className="- text-gray-1">Nhà riêng</p>
                    <p className="- text-gray-1">64/69 La Thọ 2</p>
                    <p className="- text-gray-1">điện hòa điện bàn quảng nám</p>
                  </div>
                </div>
              </div>
              <div className="w-1/6  flex flex-wrap justify-center gap-4 items-center flex-col">
                <div className="flex items-center justify-center gap-4 w-full">
                  <button
                    onClick={() => setShowModalAddAddress(true)}
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
                {/* <div className="w-full">
                  <button
                    disabled
                    className="px-2 rounded py-2 bg-orange-2  text-white"
                  >
                    Thiết lặp mặc định
                  </button>
                </div> */}
              </div>
            </div>
            <div className="w-full flex  border-b pb-4 border-gray-400">
              <div className="flex w-5/6">
                <div className="w-full flex flex-wrap flex-col gap-4">
                  <div className="flex">
                    <p className="font-semibold self-center">Lê Công Minh</p>
                    <div className="w-2 border-l-2 border-orange-1 ml-3 mr-2"></div>
                    <p className="self-center">0704549000</p>
                    <p className="ml-4 hidden text-green-600 border border-green-600 p-1">
                      Mặc định
                    </p>
                  </div>
                  <div className="flex flex-col w-1/2">
                    <p className="- text-gray-1">Nhà riêng</p>
                    <p className="- text-gray-1">64/69 La Thọ 2</p>
                    <p className="- text-gray-1">điện hòa điện bàn quảng nám</p>
                  </div>
                </div>
              </div>
              <div className="w-1/6  flex flex-wrap justify-center gap-4 items-center flex-col">
                <div className="flex text-sm items-center justify-center gap-4 w-full">
                  <a href="" className="text-blue-400 hover:text-blue-800">
                    Cập Nhật
                  </a>
                  <a href="" className="text-primary-500 hover:text-red-700">
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
          </div>
        </div>
      </div>
    </UserProfile>
  );
}

export default UserAddress;
