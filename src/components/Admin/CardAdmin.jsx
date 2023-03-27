import React from "react";
import PropTypes from "prop-types";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

CardAdmin.propTypes = {};

function CardAdmin(props) {
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
            <Link relative="path" className={props.class_name_name_product}>
              CloudFee Hạnh Nhân Nướng
            </Link>
          </div>
          <div className={`w-full hover:text-orange-3 `}>
            <Link relative="path" className={props.class_name_name_product}>
              Coffee
            </Link>
          </div>
          <div className="flex justify-between mt-2 ">
            {/* lef-card */}
            <div className="text-sm text-primary-500 self-center">
              50.000 <span>vnd</span>
            </div>
            {/* right-card */}
            <div className="flex gap-2">
              <FaRegEdit className="  h-4 w-4 text-blue-500 hover:text-blue-800 " />
              <AiOutlineDelete className=" h-4 w-4 text-red-500 hover:text-red-800 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAdmin;
