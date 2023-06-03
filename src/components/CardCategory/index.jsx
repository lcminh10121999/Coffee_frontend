import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CardCategory.propTypes = {};

function CardCategory(props) {
  const data = props.data;
  const selected = props.itemSelected;
  return (
    <div className="text-center flex flex-col items-center p-4">
      <div
        className={`hover:text-primary-500 cursor-pointer ${
          data.id === selected && "text-primary-500"
        }`}
      >
        <div
          onClick={(e) => props.handleGetListProductByCategoryID(e, data.id)}
          className="w-full flex justify-between flex-col items-center"
        >
          <img
            src={data.image}
            alt="category logo"
            className="w-16 h-16 rounded-full"
          />
          <p className="text-sm mt-2 font-semibold text-center">{data.name}</p>
        </div>
      </div>
    </div>
  );
}

export default CardCategory;
