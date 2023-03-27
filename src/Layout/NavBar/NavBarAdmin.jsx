import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgUser } from "react-icons/cg";
import { BsCart2, BsTranslate } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { HiUserCircle, HiOutlineLocationMarker } from "react-icons/hi";
import { MdNotificationsNone } from "react-icons/md";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineHistory,
} from "react-icons/ai";
import { useState } from "react";

NavBarAdmin.propTypes = {};

function NavBarAdmin(props) {
  const [openUserProfile, setOpenUserProfile] = useState(false);
  console.log(openUserProfile);
  const handleOpenUserProfile = (e) => {
    e.preventDefault();
    setOpenUserProfile(true);
  };
  const handleCloseUserProfile = (e) => {
    e.preventDefault();
    setOpenUserProfile(false);
  };
  return (
    <div className="bg-gradient-to-r from-orange-1 to-orange-2 shadow-md sticky top-0 z-20">
      {/* xs:flex xs:justify-center */}
      <div className="md:container md:mx-auto  w-full py-3 px-2 lg:grid lg:gap-6 xs:gap-2 lg:grid-cols-12 xs:grid xs:grid-cols-5 xs:justify-between lg:justify-between items-center xs:relative">
        <div className="lg:col-span-2 lg:block xs:hidden xs:col-span-5 ">
          <Link className="flex justify-center items-center" to="/">
            <img
              src="https://order.thecoffeehouse.com/_nuxt/img/logo.174bdfd.svg"
              alt="logo"
              className="lg:w-full xs:w-2/3 h-16 object-contain"
            />
          </Link>
        </div>
        <div className="col-span-2"></div>

        <div className="lg:col-span-4 xs:hidden lg:flex h-full justify-center  items-center relative">
          <input
            type="text"
            className="w-full text-black h-1/2 shadow-lg rounded-md px-8 text-sm relative"
            placeholder="Tìm kiếm"
          />
          <FaSearch className="h-4 w-4 text-orange-1 absolute left-3" />
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-1 flex justify-center justify-self-end nav-translate relative">
          <img
            src="https://viblo.asia/images/vi-flag-32x48.png"
            alt="VN-Flag"
            className="rounded-full max-h-5 mr-1 "
          />
          <img
            src="  https://viblo.asia/images/en-flag-32x48.png"
            alt="VN-Flag"
            className="rounded-full hidden"
          />

          <span className="text-xs">VI</span>
        </div>
        <div className="sub-nav-translate hidden lg:top-14 lg:right-24 xs:top-32 xs:right-16">
          <p className="text-center w-full">
            <Link className="w-full text-xs hover:bg-gray-50 ">Tiếng Việt</Link>
          </p>
          <p className="text-center  w-full">
            <Link className=" w-full text-xs hover:bg-gray-50">English</Link>
          </p>
        </div>
        <div className="col-span-1">
          <div className="lg:justify-between xs:justify-center items-center flex lg:gap-4 xs:gap-2 ">
            <NavLink
              onClick={(e) => handleOpenUserProfile(e)}
              className=" text-white xs:hidden lg:block hover:text-secondary-400 h-full relative"
            >
              <HiUserCircle className="lg:w-10 lg:h-10 xs:w-8 h-8" />
            </NavLink>

            {openUserProfile && (
              <div className="- top-16 right-8 shadow-md rounded-md absolute flex p-4 justify-center items-center flex-col text-black gap-2 bg-white">
                <Link
                  onClick={(e) => handleCloseUserProfile(e)}
                  className="flex w-full justify-end hover:text-orange-2"
                >
                  <AiOutlineClose />
                </Link>
                <Link
                  to={`/user-info/profile`}
                  className="flex w-full gap-4 justify-start items-center  hover:text-orange-2"
                >
                  <AiOutlineUser />
                  <p>Thông tin tài khoản</p>
                </Link>
                <Link
                  to={`/user-info/user-address`}
                  className="flex w-full gap-4 justify-start items-center hover:text-orange-2"
                >
                  <HiOutlineLocationMarker />
                  <p>Sổ địa chỉ</p>
                </Link>
                <Link
                  to={`/user-info/history`}
                  className="flex w-full gap-4 justify-start items-center hover:text-orange-2"
                >
                  <AiOutlineHistory />
                  <p>Lịch sử giao dịch</p>
                </Link>
                <Link className="flex w-full gap-4 justify-start items-center hover:text-orange-2">
                  <BiLogOut />
                  <p>Đăng xuất</p>
                </Link>
              </div>
            )}

            <NavLink className=" text-white xs:block lg:hidden hover:text-secondary-400 h-full ">
              <AiOutlineSearch className="lg:w-10 lg:h-10 xs:w-8 h-8 font-light" />
            </NavLink>
            <NavLink className=" text-white hover:text-secondary-400 relative">
              <MdNotificationsNone className="lg:w-8 lg:h-8 xs:w-6 xs:h-6" />
              <div className="w-5 h5 flex-colo rounded-full  text-sm bg-subMain text-white absolute -top-1 -right-2">
                2
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarAdmin;
