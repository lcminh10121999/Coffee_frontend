import React from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer";
import Banner from "../components/Banner";
import { BANNER_IMAGE } from "../data/bannerIgame";
import DashBoard from "../Screens/Dashboard";
Layout.propTypes = {};

function Layout({ children }) {
  const classNameBanner =
    "lg:p-8 xs:p-4 bg-gradient-to-r from-orange-2 to-orange-1";
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
