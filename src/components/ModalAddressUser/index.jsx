import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { HiUserCircle, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
ModalAddressUser.propTypes = {};

function ModalAddressUser(props) {
  return (
    <>
      <div
        onClick={() => props.showModalAdd(false)}
        className="flex bg-gray-300 opacity-70 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      ></div>
      <div className="flex  justify-center items-center overflow-x-hidden  m-auto w-fit h-fit overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col gap-4 w-full max-w-xl bg-white outline-none focus:outline-none pt-6 pb-4 px-4">
          <div
            className="- absolute z-50 top-5 right-5 hover:text-orange-2 cursor-pointer"
            onClick={() => props.showModalAdd(false)}
          >
            <AiOutlineClose className="w-5 h-5" />
          </div>
          <div className="flex gap-4 mb-4 justify-center">
            <HiOutlineLocationMarker className="w-8 h-8  text-primary-500 " />
            <h3 className="text-2xl font-semibold text-primary-500">
              Thêm địa chỉ mới
            </h3>
          </div>
          <div className="w-full flex gap-4 flex-col">
            <div className="flex gap-4 text-right">
              <div className="flex w-1/2 flex-col gap-2 ">
                <label className="w-full flex" htmlFor="">
                  Họ Tên <span className="pl-1 text-primary-500">*</span>
                </label>
                <input
                  type="text"
                  className="border w-full border-gray-300 py-1 px-2 rounded"
                  placeholder="tên"
                />
              </div>
              <div className="flex w-1/2 flex-col gap-2 ">
                <label className="w-1/4 flex" htmlFor="">
                  SDT <span className="pl-1 text-primary-500">*</span>
                </label>
                <input
                  type="text"
                  className="border w-full border-gray-300 py-1 px-2 rounded"
                  placeholder="SDT"
                />
              </div>
            </div>
            <div className="flex gap-4 text-right">
              <div className="flex w-1/2 flex-col gap-2 ">
                <label className=" flex" htmlFor="">
                  Tỉnh/ Thành phố{" "}
                  <span className="pl-1 text-primary-500">*</span>
                </label>
                <select
                  className="border border-gray-300 p-1 rounded"
                  name=""
                  id=""
                >
                  <option className="py-4 px-2" value="">
                    Đà Nẳng
                  </option>
                  <option value="">Quản Nam</option>
                  <option value="">HCM</option>
                </select>
              </div>
              <div className="flex w-1/2 flex-col gap-2 ">
                <label className=" flex" htmlFor="">
                  Quận/ Huyện <span className="pl-1 text-primary-500">*</span>
                </label>
                <select
                  className="border border-gray-300 p-1 rounded"
                  name=""
                  id=""
                >
                  <option className="py-4 px-2" value="">
                    Đà Nẳng
                  </option>
                  <option value="">Quản Nam</option>
                  <option value="">HCM</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4 text-right">
              <div className="flex w-1/2 flex-col gap-2 ">
                <label className="flex" htmlFor="">
                  Xã/ Phường <span className="pl-1 text-primary-500">*</span>
                </label>
                <select
                  className="border border-gray-300 p-1 rounded"
                  name=""
                  id=""
                >
                  <option className="py-4 px-2" value="">
                    Đà Nẳng
                  </option>
                  <option value="">Quản Nam</option>
                  <option value="">HCM</option>
                </select>
              </div>
              <div className="w-1/2"></div>
            </div>
            <div className="flex gap-4 text-right">
              <div className="flex w-full flex-col gap-2 ">
                <label className=" flex" htmlFor="">
                  Địa chỉ cụ thể{" "}
                  <span className="pl-1 text-primary-500">*</span>
                </label>
                <input
                  type="text"
                  className="border w-full border-gray-300 py-1 px-2 rounded"
                  placeholder="Địa chỉ cụ thể"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4 justify-center text-white">
            <button className="px-4 py-2 rounded bg-orange-1 hover:bg-orange-2">
              Tạo mới
            </button>
            <button
              className="px-4 py-2 rounded bg-primary-500 hover:bg-red-500"
              onClick={() => props.showModalAdd(false)}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalAddressUser;
