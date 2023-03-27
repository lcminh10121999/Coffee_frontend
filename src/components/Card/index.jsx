import React from "react";
import PropTypes from "prop-types";
import { BsCart2 } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
Card.propTypes = {};

function Card(props) {
  return (
    <div
      className={`w-full  xs:h-auto flex flex-col ${props.class_name_border}`}
    >
      {/* border */}
      <div className={`w-full ${props.class_name}`}>
        {/* card-top */}
        <Link to={"/product/1/CloudFee-hanh-nhan-nuong"} relative="path">
          <div className={`w-full rounded-md ${props.class_name_top}`}>
            <img
              className="xs:max-h-80 w-full rounded-md hover:scale-110"
              src="	https://product.hstatic.net/1000075078/product/cloudfee-hanh-nhan-nuong_ba00ec49e2c141ce957f0015cc52ffe7_large.png"
              alt="item"
            />
          </div>
        </Link>
        {/* card-button */}
        <div className="w-full mt-4">
          <div className={`w-full hover:text-orange-3 `}>
            <Link
              to={"/product/1/CloudFee-hanh-nhan-nuong"}
              relative="path"
              className={props.class_name_name_product}
            >
              CloudFee Hạnh Nhân Nướng
            </Link>
          </div>
          <div className="flex justify-between mt-4 ">
            {/* lef-card */}
            <div className="text-sm text-primary-500 self-center">
              50.000 <span>vnd</span>
            </div>
            {/* right-card */}
            <div>
              <FiPlus className="bg-orange-2 text-white rounded-full h-8 w-8 hover:bg-white hover:text-orange-2 hover:border-2 hover:border-orange-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
