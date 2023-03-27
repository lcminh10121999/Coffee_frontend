import React from "react";
import PropTypes from "prop-types";

FooterAdmin.propTypes = {};

function FooterAdmin(props) {
  return (
    <div className=" p-2 text-center text-xs bg-gradient-to-r from-orange-1 to-orange-2 text-white shadow-md fixed w-full bottom-0 z-20">
      CopyRight © 2014-2022 Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN mọi
      quyền bảo lưu
    </div>
  );
}

export default FooterAdmin;
