import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CardCategory.propTypes = {};

function CardCategory(props) {
  return (
    <div className="text-center p-4">
      <Link className="hover:text-primary-300">
        <img
          src="https://minio.thecoffeehouse.com/image/admin/1676431475_caphe.png"
          alt="category logo"
        />
        <p className="text-sm">Tea</p>
      </Link>
    </div>
  );
}

export default CardCategory;
