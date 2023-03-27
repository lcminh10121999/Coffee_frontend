import React from "react";
import PropTypes from "prop-types";
import { HiUserCircle, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import InputAdmin from "../../common/admin/InputAdmin";
import ButtonAdmin from "../../common/admin/ButtonAdmin";

ModalAddCategoryAdmin.propTypes = {};

function ModalAddCategoryAdmin(props) {
  return (
    <>
      <div
        onClick={() => props.setShowModalAdd(false)}
        className="flex bg-gray-300 opacity-70 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      ></div>
      <div className="flex  justify-center items-center  m-auto w-fit h-fit overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col gap-4 w-full max-w-xl bg-white outline-none focus:outline-none pt-6 pb-4 px-4">
          <div
            className="- absolute z-50 top-5 right-5 hover:text-orange-2 cursor-pointer"
            onClick={() => props.setShowModalAdd(false)}
          >
            <AiOutlineClose className="w-5 h-5" />
          </div>
          <div className="flex gap-4 mb-4 justify-center">
            <h3 className="text-2xl font-semibold text-primary-500">
              Thêm danh mục
            </h3>
          </div>
          <div className="w-full flex gap-4 flex-col mb-6">
            <div className="flex flex-wrap gap-4">
              <div className="w-full ">
                <InputAdmin
                  name="name"
                  type="text"
                  placeholder="Nhập tên danh mục"
                  label="Tên danh mục"
                  requireSpan="*"
                />
              </div>
              <div className="w-full ">
                <InputAdmin
                  name="name"
                  type="file"
                  placeholder="Nhập tên danh mục"
                  label="Chọn ảnh đại diện (không nhập sẽ dùng ảnh mặc đinh)"
                />
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
              onClickButton={() => props.setShowModalAdd(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalAddCategoryAdmin;
