import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineBars, AiOutlineHome, AiOutlineHeart } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import { Link, useLocation, useParams } from "react-router-dom";
import SideBar from "./SideBar";
import UserSideBart from "./UserSideBart";
import { TbNews } from "react-icons/tb";
import { CiGlass } from "react-icons/ci";
import { useSelector } from "react-redux";

DashBoard.propTypes = {};

function DashBoard(props) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openUserSideBar, setOpenUserSideBar] = useState(false);
  const location = useLocation();
  const slug = location.pathname;
  const params = useParams();
  const userLogin = useSelector((state) => state.userLogin.userInfo);
  const [userLoginData, setUserLoginData] = useState(userLogin);
  const logged = useSelector((state) => state.userLogin.logged);

  const [changeActivate, setChangeActivate] = useState(0);
  useEffect(() => {
    if (
      slug == "/user-info/profile" ||
      slug == "/user-info/history" ||
      slug == "/user-info/user-address"
    ) {
      setChangeActivate(1);
    } else if (slug == "/") {
      setChangeActivate(0);
    } else if (slug == "/news" || slug == `/news/${params.id}/${params.name}`) {
      setChangeActivate(2);
    } else if (
      slug == "/product" ||
      slug == `/product/${params.id}/${params.name}`
    ) {
      setChangeActivate(3);
    }
  }, [slug]);
  // useEffect(() => {
  //   if (userLogin.length !== 0) {
  //     const data = JSON.parse(userLogin);
  //     setUserLoginData(data);
  //   }
  // }, []);
  return (
    <>
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <UserSideBart
        openUserSideBar={openUserSideBar}
        setOpenUserSideBar={setOpenUserSideBar}
        userLoginData={userLoginData}
        logged={logged}
      />
      <div className="bg-gray-200 text-black px-4 py-2 lg:hidden xs:flex sticky bottom-0 z-20  w-full">
        <div className="w-full flex flex-wrap justify-between">
          <div className="w-1/5 flex flex-war justify-center flex-col items-center">
            <div
              onClick={() => setOpenSideBar(true)}
              className={`flex hover:text-orange-2  justify-center flex-col items-center`}
            >
              <AiOutlineBars className="w-8 h-8" />

              <p className="text-xs">Danh mục</p>
            </div>
          </div>

          <div className="w-1/5 flex flex-war justify-center flex-col items-center">
            <Link
              to={`/product`}
              className={`flex hover:text-orange-2  justify-center flex-col items-center ${
                changeActivate == 3 && "text-orange-2"
              }`}
            >
              <CiGlass className="w-8 h-8" />
              <p className="text-xs">Menu</p>
            </Link>
          </div>
          <div
            className={`flex hover:text-orange-2  justify-center flex-col items-center ${
              changeActivate == 0 && "text-orange-2"
            }`}
          >
            <Link
              to={"/"}
              className="flex hover:text-orange-2  justify-center flex-col items-center"
            >
              <AiOutlineHome className="w-8 h-8" />
              <p className="text-xs">Trang chủ</p>
            </Link>
          </div>
          <div className="w-1/5 flex flex-war justify-center flex-col items-center">
            <Link
              to={"/news"}
              className={`flex hover:text-orange-2  justify-center flex-col items-center ${
                changeActivate == 2 && "text-orange-2"
              }`}
            >
              <TbNews className="w-8 h-8" />
              <p className="text-xs">Tin tức</p>
            </Link>
          </div>
          <div className="w-1/5 flex flex-war justify-center flex-col items-center">
            <div
              onClick={() => setOpenUserSideBar(true)}
              className={`flex hover:text-orange-2  justify-center flex-col items-center ${
                changeActivate == 1 && "text-orange-2"
              }`}
            >
              <HiUserCircle className="w-8 h-8" />
              <p className="text-xs">Tài khoản</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
