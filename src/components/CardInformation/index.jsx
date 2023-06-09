import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CardInformation.propTypes = {};

function CardInformation(props) {
  return (
    <div className={`w-full  p-4 `}>
      <div className={`rounded-md ${props.shadow} ${props.flexCLass}`}>
        <div className=" overflow-hidden">
          <Link to={`/news/1/chiec-ly-doi-mau`}>
            <img
              src={props.cartImage}
              alt=""
              className={`rounded-md  overflow-hidden hover:scale-105 ${props.maxHeightImg}`}
            />
          </Link>
        </div>
        <div className="mt-4">
          <Link to={`/news/1/chiec-ly-doi-mau`}>
            <p className="font-semibold text-orange-1  mb-2 hover:text-orange-2">
              CHIẾC LY ĐỔI MÀU "NGÀN NGƯỜI THEO"
            </p>
          </Link>
          <p className="text-xs text-gray-400 mb-2">19/01/2023</p>
          <p className="text-sm  mb-2">
            Bộ sản phẩm Trà sữa Merry CloudTea trong chiếc ly đổi màu từ The
            Coffee House hiện đang“làm mưa làm gió" từ mạng xã hội tới đời thực,
            khiến giới...
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardInformation;
