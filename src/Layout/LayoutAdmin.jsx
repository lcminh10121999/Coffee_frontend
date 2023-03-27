import React from "react";
import PropTypes from "prop-types";
import NavBarAdmin from "./NavBar/NavBarAdmin";
import FooterAdmin from "./FooterAdmin";
import SideBarAdmin from "./SideBar/SideBarAdmin";

LayoutAdmin.propTypes = {};

function LayoutAdmin({ children }) {
  return (
    <div className="- min-h-screen">
      <NavBarAdmin />
      <div className="flex relative">
        <SideBarAdmin />
        <div className="w-3/12"></div>
        <div className="w-9/12 pt-10 pb-20">{children}</div>
      </div>

      <FooterAdmin />
    </div>
  );
}

export default LayoutAdmin;
