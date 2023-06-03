import React, { useEffect } from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer";
import Banner from "../components/Banner";
import { BANNER_IMAGE } from "../data/bannerIgame";
import DashBoard from "../Screens/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { loginSlide } from "../actionSlide/loginSlide";
import { getAllCartDetail } from "../actionSlide/cartSlide";
import { getStoreList, storeSlide } from "../actionSlide/storeSlide";
import { getListAddressBook } from "../actionSlide/addressBookSlide";
Layout.propTypes = {};

function Layout({ children }) {
  const classNameBanner =
    "lg:p-8 xs:p-4 bg-gradient-to-r from-orange-2 to-orange-1";
  const loggedLocalStore = localStorage.getItem("logged");
  const loggedSessionStore = sessionStorage.getItem("logged");
  const storeCheck = useSelector((state) => state.store.storeCheck);
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.userLogin.logged);
  const storeList = useSelector((state) => state.store.storeList.data);
  const userLogin = useSelector((state) => state.userLogin.userInfo);
  const handleLogin = () => {
    if (!logged) {
      if (
        JSON.parse(loggedLocalStore) === true ||
        JSON.parse(loggedSessionStore) === true
      ) {
        if (JSON.parse(loggedLocalStore) === true) {
          let dataUser = localStorage.getItem("userLogin");

          const data = JSON.parse(dataUser);

          dispatch(loginSlide.actions.setUserLogin(data));
          dispatch(loginSlide.actions.setLogged(true));
        } else if (JSON.parse(loggedSessionStore) === true) {
          let dataUser = sessionStorage.getItem("userLogin");

          const data = JSON.parse(dataUser);

          dispatch(loginSlide.actions.setUserLogin(data));
          dispatch(loginSlide.actions.setLogged(true));
        }
      }
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);
  // useEffect(() => {
  //   if (logged && userLogin) {
  //     dispatch();
  //   }
  // }, [logged, userLogin]);
  useEffect(() => {
    // !storeList && dispatch(getStoreList());
    // if (!storeList) {

    // }
    dispatch(getStoreList());
    dispatch(
      storeSlide.actions.setStoreCheck({
        id: "all",
        name: "Chọn Cửa Hàng",
        address: "Chọn Cửa Hàng",
      })
    );
  }, []);
  useEffect(() => {
    if (userLogin?.id) {
      dispatch(getListAddressBook({ id: userLogin.id }));
      console.log("listAddressBook");
    }
  }, [userLogin?.id]);
  return (
    <>
      <div className="text-white ">
        <NavBar />

        {/* <Banner value={BANNER_IMAGE} class={classNameBanner} /> */}
        {children}

        <Footer />
        <DashBoard />
      </div>
    </>
  );
}

export default Layout;
