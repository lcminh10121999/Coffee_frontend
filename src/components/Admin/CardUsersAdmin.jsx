import React from "react";
import PropTypes from "prop-types";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { DATA_COLOR_BG_CARD_ADMIN } from "../../data/dataColorBgCardAdmin";
CardUsersAdmin.propTypes = {};

function CardUsersAdmin(props) {
  const color = DATA_COLOR_BG_CARD_ADMIN;
  return (
    <div className="text-center  p-4">
      <div className=" shadow-image rounded-5 flex flex-col">
        <div
          className={`rounded-t-5 h-20 w-full flex justify-center relative ${color
            .sort(() => Math.random() - Math.random())
            .slice(0, 1)}`}
        >
          <p className="absolute left-3 top-2 text-lg font-medium text-white">
            1
          </p>
          <img
            onClick={() => props.setShowModalInfo(true)}
            src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
            alt="category logo"
            className="max-h-24 absolute top-5 rounded-full cursor-pointer"
          />
        </div>
        <div className="pt-11 pb-8 relative">
          <div className="flex absolute  right-2 bottom-3 gap-2">
            <FaRegEdit
              onClick={() => props.setShowModalEdit(true)}
              className="  h-4 w-4 text-blue-500 hover:text-blue-800 cursor-pointer"
            />
          </div>
          <div className="flex absolute  left-3 bottom-3 gap-2">
            <p
              className="text-xs text-blue-600 cursor-pointer hover:text-blue-800 "
              onClick={() => props.setShowModalInfo(true)}
            >
              # KH-00001
            </p>
          </div>
          <p
            className="text-lg text-orange-1 hover:text-orange-2 font-medium cursor-pointer"
            onClick={() => props.setShowModalInfo(true)}
          >
            {" "}
            Lê Công Minh
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardUsersAdmin;
