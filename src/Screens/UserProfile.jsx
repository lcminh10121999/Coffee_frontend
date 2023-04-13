import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Layout from "../Layout/Layout";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineHistory,
} from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { HiUserCircle, HiOutlineLocationMarker } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getUserLoggedById } from "../actionSlide/loginSlide";
UserProfile.propTypes = {};

function UserProfile({ children }) {
  const location = useLocation();
  const slug = location.pathname;
  const userLogged = useSelector((state) => state.userLogin.logged);
  const userLogin = useSelector((state) => state.userLogin.userInfo);
  const userLoggedLoading = useSelector(
    (state) => state.userLogin.loadingGetUserInfo
  );
  const [changeActivate, setChangeActivate] = useState(0);
  const loggedLocalStore = localStorage.getItem("logged");
  const loggedSessionStore = sessionStorage.getItem("logged");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (slug == "/user-info/profile") {
      setChangeActivate(1);
    } else if (slug == "/user-info/history") {
      setChangeActivate(2);
    } else if (slug == "/user-info/user-address") {
      setChangeActivate(3);
    }

    if (userLogged && userLogin.length !== 0 && userLoggedLoading === "idle") {
      const data = JSON.parse(userLogin);
      dispatch(getUserLoggedById(data.id));
    }

    if (
      JSON.parse(loggedLocalStore) !== true &&
      JSON.parse(loggedSessionStore) !== true &&
      !userLogged
    ) {
      navigate("/", { replace: true });
    }
  }, [slug, userLogged]);

  return (
    <Layout>
      <div className="lg:container lg:mx-auto xs:mx-4 flex flex-wrap my-8 text-black">
        <div className="w-1/4 lg:flex lg:flex-col xs:hidden items-center gap-4 relative">
          <div className="w-70 h-70 top-40 right-8 shadow-lg border border-gray-200 flex p-4 sticky justify-center items-center flex-col text-black gap-4 bg-white">
            {changeActivate == 1 ? (
              <Link
                to={`/user-info/profile`}
                className="flex w-full gap-4 justify-start items-center text-orange-1 hover:text-orange-2"
              >
                <AiOutlineUser className="w-6 h-6" />
                <p className="text-lg">Thông tin tài khoản</p>
              </Link>
            ) : (
              <Link
                to={`/user-info/profile`}
                className="flex w-full gap-4 justify-start items-center  hover:text-orange-2"
              >
                <AiOutlineUser className="w-6 h-6" />
                <p className="text-lg">Thông tin tài khoản</p>
              </Link>
            )}
            {changeActivate == 3 ? (
              <Link
                to={`/user-info/user-address`}
                className="flex w-full gap-4 justify-start items-center text-orange-1 hover:text-orange-2"
              >
                <HiOutlineLocationMarker className="w-6 h-6" />
                <p className="text-lg">Sổ địa chỉ</p>
              </Link>
            ) : (
              <Link
                to={`/user-info/user-address`}
                className="flex w-full gap-4 justify-start items-center hover:text-orange-2"
              >
                <HiOutlineLocationMarker className="w-6 h-6" />
                <p className="text-lg">Sổ địa chỉ</p>
              </Link>
            )}
            {changeActivate == 2 ? (
              <Link
                to={`/user-info/history`}
                className="flex w-full gap-4 justify-start items-center text-orange-1 hover:text-orange-2"
              >
                <AiOutlineHistory className="w-6 h-6" />
                <p className="text-lg">Lịch sử giao dịch</p>
              </Link>
            ) : (
              <Link
                to={`/user-info/history`}
                className="flex w-full gap-4 justify-start items-center hover:text-orange-2"
              >
                <AiOutlineHistory className="w-6 h-6" />
                <p className="text-lg">Lịch sử giao dịch</p>
              </Link>
            )}
          </div>
        </div>
        <div className="lg:w-3/4 xs:w-full flex flex-wrap">{children}</div>
      </div>
    </Layout>
  );
}

export default UserProfile;
