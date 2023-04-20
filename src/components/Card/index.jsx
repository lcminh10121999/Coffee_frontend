import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BsCart2 } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { Link, Navigate } from "react-router-dom";
import { removeVietnameseTones } from "../../Handle/removeVietnameseTones";
import { changeWhiteSpaceToDash } from "../../Handle/changeWhiteSpaceToDash";
import { useDispatch } from "react-redux";
import { getProductDetail } from "../../actionSlide/productSlide";
Card.propTypes = {};

function Card(props) {
  const data = props.data;
  const dispatch = useDispatch();
  const [slugProduct, setSlugProduct] = useState(data.name);
  const [productId, setProductId] = useState(data.id);

  useEffect(() => {
    if (data) {
      let myProductName = removeVietnameseTones(slugProduct);
      let slug = changeWhiteSpaceToDash(myProductName);
      setSlugProduct(slug);
      setProductId(data.id);
    }
  }, [data]);

  // const test = () => {
  //   let myProductName = removeVietnameseTones(slugProduct);
  //   let slug = changeWhiteSpaceToDash(myProductName);
  //   setSlugProduct(slug);
  //   setProductId(data.id);
  // };
  // const handleGetProductDetail = async () => {
  //   await dispatch(getProductDetail(productId));
  //   Navigate()
  // }
  return (
    <div
      className={`w-full  xs:h-60 lg:h-82 flex flex-col ${props.class_name_border}`}
    >
      {/* border */}
      <div
        className={`w-full flex flex-col  justify-between h-full ${props.class_name}`}
      >
        {/* card-top */}
        <Link
          to={{
            pathname: "/product/" + slugProduct,
          }}
          state={{ id: data.id }}
          relative="path"
        >
          <div className={`w-full rounded-md ${props.class_name_top}`}>
            <img
              className="xs:max-h-80 w-full rounded-md hover:scale-110"
              src={data.image}
              alt="item"
            />
          </div>
        </Link>
        {/* card-button */}
        <div className="w-full h-full flex flex-col justify-between  mt-4">
          <Link
            to={{
              pathname: "/product/" + slugProduct,
            }}
            state={{ id: data.id }}
            relative="path"
            className={`${props.class_name_name_product} font-medium w-full hover:text-orange-3 `}
          >
            <div className={``}>{data.name}</div>
          </Link>
          <div className="flex justify-between  mt-4 ">
            {/* lef-card */}
            <div className="text-sm text-primary-500 self-center font-medium">
              {data.price.toLocaleString()} <span>vnd</span>
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
