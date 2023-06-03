import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";

HistoryCard.propTypes = {};

function HistoryCard(props) {
  const historyCardData = props.historyCardData;
  const showAnimation = {
    hidden: {
      height: 0,
      width: "80%",
      opacity: 0,
      transition: {
        duration: 0.75,
      },
    },
    show: {
      opacity: 1,
      height: "auto",
      width: "100%",
      transition: {
        duration: 0.75,
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
            {historyCardData.map((item) => {
              return (
                <div className="flex gap-4 lg:pl-20 xs:p-0 lg:pb-3 w-full flex-wrap border-b border-gray-300">
                  <div className="">
                    <img
                      src={item?.orderDetailProduct?.image}
                      alt=""
                      className="max-h-16"
                    />
                  </div>

                  <div className="flex lg:w-5/6 xs:w-full justify-between">
                    <div className="flex flex-col ">
                      <Link>
                        <p className="w-full hover:text-orange-1">
                          <span>{item.quantity} X </span>
                          {item?.orderDetailProduct?.name}
                        </p>
                      </Link>
                      <p className="w-full text-gray-1 text-sm">
                        Note: {item?.note}
                      </p>
                      <p className="w-full text-gray-1 text-sm">
                        Size: {item?.orderDetailSize.name}
                      </p>
                      {item?.orderDetailTopping?.map((toppingItem) => {
                        return (
                          <p className="w-full text-gray-1 text-sm">
                            {toppingItem.name}
                          </p>
                        );
                      })}
                    </div>
                    <div className="flex flex-col ">
                      <p className="w-full  text-primary-500">
                        {item.price.toLocaleString()}₫
                      </p>
                      <p className="w-full text-primary-500  text-sm">
                        {item?.orderDetailSize?.price.toLocaleString()}₫
                      </p>
                      {item?.orderDetailTopping?.map((toppingItem) => {
                        return (
                          <p className="w-full  text-primary-500 text-sm">
                            {toppingItem.price.toLocaleString()}₫
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
        className="cursor-pointer my-4 w-fit text-blue-500 text-sm"
      >
        {isOpen ? "Ẩn chi tiết" : "Xem Chi tiết"}
      </div>
    </>
  );
}

export default HistoryCard;
