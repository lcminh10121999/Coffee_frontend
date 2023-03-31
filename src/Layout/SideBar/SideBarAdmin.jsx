import React from "react";
import PropTypes from "prop-types";
import { ROUTES_SIDEBAR_ADMIN } from "../../data/SideBarAdminRoutes";
import { NavLink } from "react-router-dom";
import { Link, useLocation, useParams } from "react-router-dom";
SideBarAdmin.propTypes = {};

function SideBarAdmin(props) {
  const routeSideBarAdmin = ROUTES_SIDEBAR_ADMIN;

  const location = useLocation();
  const slug = location.pathname;

  // fix bug active link
  console.log(routeSideBarAdmin);
  return (
    <div className="left-12 top-32 w-60 rounded-5  z-20  right-8 shadow-lg border p-2 border-gray-200 flex fixed justify-center items-center flex-col text-black bg-white">
      {routeSideBarAdmin.map((item) => {
        {
          /* return (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "bg-orange-2 rounded-5 text-white w-full "
                : "w-full text-orange-2"
            }
          >
            <p className="w-full text-center px-4 py-2">{item.name}</p>
          </NavLink>
        ); */
        }
        return (
          <NavLink
            to={item.path}
            // className={({ isActive }) =>
            //   isActive
            //     ? "bg-orange-2 rounded-5 text-white w-full "
            //     : "w-full text-orange-2"
            // }
            className={
              slug == item.path ||
              slug == item.path_2 ||
              slug == item.path_3 ||
              slug == item.path_4
                ? "bg-orange-2 rounded-5 text-white w-full"
                : "w-full text-orange-2"
            }
          >
            <p className="w-full text-center px-4 py-2">{item.name}</p>
          </NavLink>
        );
      })}
    </div>
  );
}

export default SideBarAdmin;
