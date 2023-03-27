import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";

HistoryCard.propTypes = {};

function HistoryCard(props) {
  const historyCardData = props.historyCardData;
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 1.5,
      },
    },
    show: {
      opacity: 1,
      width: "100%",
      transition: {
        duration: 1.5,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  const openOrderDetail = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={showAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-4  w-full"
          >
            {historyCardData.map((productItem) => {
              return (
                <div className="flex gap-4 lg:pl-20 xs:p-0 pb-4 w-full flex-wrap border-b border-gray-300">
                  <div className="">
                    <img src={productItem.img} alt="" className="max-h-16" />
                  </div>

                  <div className="flex lg:w-5/6 xs:w-full justify-between">
                    <div className="flex flex-col ">
                      <Link>
                        <p className="w-full hover:text-orange-1">
                          <span>{productItem.quantity} X </span>
                          {productItem.name}
                        </p>
                      </Link>
                      <p className="w-full text-gray-1 text-sm">
                        Size: {productItem.size.name}
                      </p>
                      {productItem.topping.map((toppingItem) => {
                        return (
                          <p className="w-full text-gray-1 text-sm">
                            {toppingItem.name} x {toppingItem.quantity}
                          </p>
                        );
                      })}
                    </div>
                    <div className="flex flex-col ">
                      <p className="w-full  text-primary-500">
                        {productItem.price}
                      </p>
                      <p className="w-full text-primary-500  text-sm">
                        {productItem.size.price}đ
                      </p>
                      {productItem.topping.map((toppingItem) => {
                        return (
                          <p className="w-full  text-primary-500 text-sm">
                            {toppingItem.price}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <div
        onClick={openOrderDetail}
        className="cursor-pointer w-fit text-blue-500 text-sm"
      >
        {isOpen ? "Ẩn chi tiết" : "Xem Chi tiết"}
      </div>
    </>
  );
}

export default HistoryCard;
