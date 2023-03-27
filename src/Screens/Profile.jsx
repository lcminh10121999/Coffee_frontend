import React from "react";
import PropTypes from "prop-types";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineHistory,
} from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";
import { Link, NavLink, useParams } from "react-router-dom";
import { HiUserCircle, HiOutlineLocationMarker } from "react-icons/hi";
import UserProfile from "./UserProfile";

Profile.propTypes = {};

function Profile(props) {
  return (
    <UserProfile>
      <div className="w-full mb-8 flex justify-center items-center gap-2">
        <AiOutlineUser className="w-8 h-8  text-primary-500 " />
        <p className="text-2xl font-semibold text-primary-500">
          Thông tin tài khoản
        </p>
      </div>
      <div className="lg:w-2/4 xs:w-full">
        <div className="w-full flex flex-col justify-center  items-center gap-4 relative">
          <div class="personal-image">
            <label class="label">
              <input type="file" className="upload-avatar " />
              <figure class="personal-figure w-60 h-60 ">
                <img
                  src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                  class="personal-avatar  w-60 h-60"
                  alt="avatar"
                />
                <figcaption class="personal-figcaption flex justify-center items-center">
                  <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" />
                </figcaption>
              </figure>
            </label>
          </div>

          <div className="lg:px-10 lg:m-0 xs:mb-4  relative">
            <img
              src="https://fibocard.com/image/245_1_P%20M.png"
              className="shadow-lg"
              alt=""
            />
            <p className="- absolute top-4 lg:left-16 xs:left-6 text-xl text-white font-semibold">
              Lê Công Minh
            </p>
            <p className="- absolute top-12 lg:left-16 xs:left-6 text-base text-white font-normal">
              1000 Coins
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-2/4 xs:w-full gap-4 flex flex-col">
        <p>Tên Khách Hàng</p>
        <div className="w-full flex flex-col gap-4">
          <input
            type="text"
            className="w-full shadow-lg border border-gray-1 rounded p-2"
            value={"Lê Công Minh"}
            placeholder="Họ và Tên"
          />
        </div>
        <p>Số Điên Thoại</p>

        <div className="w-full flex flex-col gap-8">
          <input
            type="text"
            className="w-full border shadow-lg bg-gray-300  rounded p-2"
            placeholder="Họ"
            value="0909090909"
            disabled
          />
        </div>
        <p>Sinh Nhật (không thể thay đổi khi đã lựa chọn)</p>
        <div className="w-full flex gap-8">
          <input
            type="text"
            className="w-full border shadow-lg bg-gray-300  rounded p-2"
            placeholder="Họ"
            value="10-12-1999"
            disabled
          />
        </div>
        <p>Email</p>
        <div className="w-full flex gap-8">
          <input
            type="text"
            className="w-full border shadow-lg bg-gray-300  rounded p-2"
            placeholder="Họ"
            value="lcminh10121999@gmail.com"
            disabled
          />
        </div>
        <p>Giới tính</p>
        <div className="w-full flex gap-8">
          <div>
            <input type="radio" checked name="sex" className="mr-1" />
            <span>Nam</span>
          </div>
          <div>
            <input type="radio" name="sex" className="mr-1" />
            <span>Nữ</span>
          </div>
        </div>
        <div className="w-full flex gap-8 justify-center">
          <button className="text-white shadow-lg bg-orange-1 hover:bg-orange-2 px-4 py-2 rounded">
            Cập Nhật
          </button>
        </div>
      </div>
    </UserProfile>
  );
}

export default Profile;
