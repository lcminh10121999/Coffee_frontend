import React, { useState } from "react";
import PropTypes from "prop-types";
import InputAdmin from "../../common/admin/InputAdmin";
import { AiOutlineClose } from "react-icons/ai";
import LabelTextAdmin from "../../common/admin/LabelTextAdmin";

ModalUserInforAdmin.propTypes = {};

function ModalUserInforAdmin(props) {
  return (
    <>
      <div
        onClick={() => props.setShowModalInfo(false)}
        className="flex bg-gray-300 opacity-70 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      ></div>
      <div className="flex  justify-center items-center m-auto  h-fit overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col  gap-4 w-2/3 bg-white outline-none focus:outline-none pt-4 pb-4 px-8">
          <div
            className="- absolute z-50 top-5 right-5 hover:text-orange-2 cursor-pointer"
            onClick={() => props.setShowModalInfo(false)}
          >
            <AiOutlineClose className="w-5 h-5" />
          </div>
          <div className="flex gap-4 mb-2 justify-center">
            <h3 className="text-2xl font-semibold text-primary-500">
              Thông tin tài khoản
            </h3>
          </div>
          <div className="w-full flex gap-4 flex-col mb-4">
            <div className="flex gap-4 flex-row ">
              <div className="w-1/3 flex flex-col  items-center justify-start gap-8">
                <div class="personal-image">
                  <label class="label">
                    <input type="file" className="upload-avatar" />
                    <figure class="personal-figure w-40 h-40">
                      <img
                        src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                        class="personal-avatar  w-40 h-40"
                        alt="avatar"
                      />
                      <figcaption class="personal-figcaption flex justify-center items-center">
                        <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" />
                      </figcaption>
                    </figure>
                  </label>
                </div>
                <div className="w-full  relative">
                  <img
                    src="https://fibocard.com/image/245_1_P%20M.png"
                    className="shadow-lg"
                    alt=""
                  />
                  <p className="- absolute top-2 lg:left-4 xs:left-6 text-lg font-medium text-white ">
                    Lê Công Minh
                  </p>
                  <p className="- absolute top-10 lg:left-4 xs:left-6 text-base text-white font-normal">
                    1000 Coins
                  </p>
                </div>
              </div>
              <div className="w-2/3 flex pl-10 flex-col">
                <LabelTextAdmin label="Mã Khách hàng" text="KH-00001" />

                <LabelTextAdmin label="Họ tên" text="Lê Công Minh" />
                <LabelTextAdmin label="Só điện thoại" text="0704549000" />
                <LabelTextAdmin label="Ngày sinh" text="10/12/1999" />
                <LabelTextAdmin label="Giói tính" text="Nam" />
                <LabelTextAdmin label="Email" text="lcminh@gmail.com" />
                <LabelTextAdmin
                  label="Địa chỉ"
                  text="La thọ 2 Điện Hòa Điện Bàn Quảng Nam"
                />
                <LabelTextAdmin label="Hạng thẻ" text="Platium" />
                <LabelTextAdmin label="Điểm tích lũy" text="1000" />
              </div>
            </div>
          </div>
          {/* <div className="w-full flex gap-4 justify-center text-white">
            <button className="px-4 py-2 rounded bg-orange-1 hover:bg-orange-2">
              Tạo mới
            </button>
            <button
              className="px-4 py-2 rounded bg-primary-500 hover:bg-red-500"
              onClick={() => props.setShowModalInfo(false)}
            >
              Hủy
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ModalUserInforAdmin;
