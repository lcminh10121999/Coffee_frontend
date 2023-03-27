import React from "react";
import PropTypes from "prop-types";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { DATA_COLOR_BG_CARD_ADMIN } from "../../data/dataColorBgCardAdmin";
CardCategoryAdmin.propTypes = {};

function CardCategoryAdmin(props) {
  const color = DATA_COLOR_BG_CARD_ADMIN;
  return (
    <div className="text-center p-4">
      <div className=" shadow-image rounded-5 flex flex-col">
        <div
          className={`h-20 rounded-t-5 w-full flex justify-center relative ${color
            .sort(() => Math.random() - Math.random())
            .slice(0, 1)}`}
        >
          <p className="absolute left-3 top-2 text-lg font-medium text-white">
            1
          </p>
          <img
            src="https://minio.thecoffeehouse.com/image/admin/1676431475_caphe.png"
            alt="category logo"
            className="max-h-24 absolute top-5"
          />
        </div>
        <div className="pt-12 pb-8 relative">
          <div className="flex absolute  right-2 bottom-3 gap-2">
            <FaRegEdit className="  h-4 w-4 text-blue-500 hover:text-blue-800 " />
            <AiOutlineDelete className=" h-4 w-4 text-red-500 hover:text-red-800 " />
          </div>
          <p className="text-lg text-orange-1 font-medium">Tea</p>
        </div>
      </div>
    </div>
  );
}

export default CardCategoryAdmin;
