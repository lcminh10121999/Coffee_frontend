import React from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer";
import Banner from "../components/Banner";
import { BANNER_IMAGE } from "../data/bannerIgame";
import DashBoard from "../Screens/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { loginSlide } from "../actionSlide/loginSlide";
Layout.propTypes = {};

function Layout({ children }) {
  const classNameBanner =
    "lg:p-8 xs:p-4 bg-gradient-to-r from-orange-2 to-orange-1";
  const loggedLocalStore = localStorage.getItem("logged");
  const loggedSessionStore = sessionStorage.getItem("logged");
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.userLogin.logged);
  const handleLogin = () => {
    if (!logged) {
      if (
        JSON.parse(loggedLocalStore) === true ||
        JSON.parse(loggedSessionStore) === true
      ) {
        if (JSON.parse(loggedLocalStore) === true) {
          let dataUser = localStorage.getItem("userLogin");
          dispatch(loginSlide.actions.setUserLogin(dataUser));
          dispatch(loginSlide.actions.setLogged(true));
        } else if (JSON.parse(loggedSessionStore) === true) {
          let dataUser = sessionStorage.getItem("userLogin");

          dispatch(loginSlide.actions.setUserLogin(dataUser));
          dispatch(loginSlide.actions.setLogged(true));
        }
      }
    }
  };
  handleLogin();
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
