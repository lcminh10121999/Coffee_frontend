import React, { useState } from "react";
import PropTypes from "prop-types";
import InputAdmin from "../../common/admin/InputAdmin";
import { AiOutlineClose } from "react-icons/ai";
import ButtonAdmin from "../../common/admin/ButtonAdmin";

ModalAddSizeAdmin.propTypes = {};

function ModalAddSizeAdmin(props) {
  const handleCloseModal = (value) => {
    props.setShowModalAddSize(value);
    console.log("acb");
  };

  return (
    <>
      <div
        onClick={() => props.setShowModalAddSize(false)}
        className="flex bg-gray-300 opacity-70 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      ></div>
      <div className="flex  justify-center items-center   overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col gap-4 w-full max-w-xl bg-white outline-none focus:outline-none pt-4 pb-4 px-4">
          <div
            className="- absolute z-50 top-5 right-5 hover:text-orange-2 cursor-pointer"
            onClick={() => props.setShowModalAddSize(false)}
          >
            <AiOutlineClose className="w-5 h-5" />
          </div>
          <div className="flex gap-4 mb-2 justify-center">
            <h3 className="text-2xl font-semibold text-primary-500">
              Thêm Size
            </h3>
          </div>
          <div className="w-full flex gap-4 flex-col mb-4">
            <div className="flex gap-4 flex-row ">
              <div className="w-full flex flex-col gap4">
                <div className="w-full mb-4 flex flex-col gap-2">
                  <div className="w-full">
                    <InputAdmin
                      name="name"
                      type="text"
                      placeholder="Nhập Họ và tên"
                      label="Họ và tên"
                      requireSpan="*"
                    />
                  </div>
                  <div className="w-full">
                    <InputAdmin
                      name="phone"
                      type="text"
                      placeholder="Nhập số điện thoại"
                      label="Số điện thoại"
                      requireSpan="*"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-4 justify-center text-white">
            <ButtonAdmin
              style="bg-orange-1 border-orange-2 hover:bg-orange-2 hover:border-orange-1   "
              text="Tạo mới"
            />
            <ButtonAdmin
              style="bg-primary-500 border-red-500 hover:bg-red-500 hover:border-primary-500 "
              text=" Hủy"
              onClickButton={() => handleCloseModal(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalAddSizeAdmin;
