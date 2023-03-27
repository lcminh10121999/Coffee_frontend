import React, { useState } from "react";
import PropTypes from "prop-types";
import UserProfile from "./UserProfile";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineHistory,
} from "react-icons/ai";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { ORDER_TEST_DATA } from "../data/OrderTestData";
import HistoryCard from "../components/HistoyCard";

UserHistory.propTypes = {};

function UserHistory(props) {
  const orderDataTest = ORDER_TEST_DATA;
  console.log(orderDataTest);

  return (
    <UserProfile>
      <div className="w-full min-h-haft-screen">
        <div className="w-full mb-4 flex justify-center items-center gap-2">
          <AiOutlineHistory className="w-8 h-8  text-primary-500 " />
          <p className="text-2xl font-semibold text-primary-500">
            Lịch sử giao dịch
          </p>
        </div>
        <div className="flex mt-8 gap-4 lg:flex-nowrap xs:flex-wrap w-full">
          <div className="lg:w-5/12 xs:w-full justify-center h-8 items-center relative">
            <input
              type="text"
              className="w-full text-black h-8 border border-gray-400 rounded px-8 text-sm relative"
              placeholder="Tìm kiếm"
            />
            <FaSearch className="h-4 w-4 text-orange-1 absolute top-2 left-3" />
          </div>
          <div className="lg:w-2/12 xs:w-2/6 ">
            <select
              className="change-arrow border w-full h-8 border-gray-400 rounded px-3 appearance-none"
              name=""
              id=""
            >
              <option value="">Trạng Thái</option>
              <option value="">Chờ chế biến</option>
              <option value="">Đang Giao</option>
              <option value="">Đã Giao</option>
              <option value="">Đã Hủy</option>
            </select>
          </div>
          <div className="lg:w-5/12 xs:w-3/6 lg:m-0 xs:ml-auto">
            <p className="h-8 bg-gray-200 font-poppins">abc</p>
          </div>
        </div>
        <div className="flex mt-8 gap-8 flex-wrap w-full ">
          {orderDataTest.map((item, index) => {
            const count = index + 1;
            return (
              <div className="flex flex-wrap gap-4 w-full border-b border-gray-300">
                <div className="w-full flex lg:gap-8 xs:gap-2 flex-wrap">
                  <p className="font-medium">{count}</p>
                  <p className="font-medium">{item.code}</p>
                  <p>{item.time}</p>
                  <p className="font-medium">{item.name}</p>
                  <p>{item.address}</p>
                  {item.status == 1 && (
                    <p className="- text-green-600">Đang chế biến</p>
                  )}
                  {item.status == 2 && (
                    <p className="- text-blue-600">Đang Giao</p>
                  )}
                  {item.status == 3 && (
                    <p className="- text-blue-600">Đã Giao</p>
                  )}
                  {item.status == 4 && (
                    <p className="- text-primary-500">Đã Hủy</p>
                  )}
                </div>

                <div className="flex w-full gap-4 flex-col flex-wrap">
                  {/* <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        custom={index}
                        key={index}
                        className="flex flex-col gap-4 w-full"
                      >
                        {item.product.map((productItem) => {
                          return (
                            <div className="flex gap-4 pl-20 w-full flex-wrap">
                              <div className="">
                                <img
                                  src={productItem.img}
                                  alt=""
                                  className="max-h-16"
                                />
                              </div>

                              <div className="flex w-5/6 justify-between">
                                <div className="flex flex-col ">
                                  <Link>
                                    <p className="w-full hover:text-orange-1">
                                      {productItem.name}
                                    </p>
                                  </Link>
                                  <p className="w-full text-gray-1 text-sm">
                                    Size: {productItem.size.name}
                                  </p>
                                  {productItem.topping.map((toppingItem) => {
                                    return (
                                      <p className="w-full text-gray-1 text-sm">
                                        {toppingItem.name} x{" "}
                                        {toppingItem.quantity}
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
                  </AnimatePresence> */}
                  {/* {item.product.map((productItem) => {
                    return ;
                  })} */}
                  <HistoryCard historyCardData={item.product} />

                  <div className="flex gap-2 text-primary-500 items-end justify-end">
                    <p>Tổng tiền: </p>
                    <p className="text-2xl">{item.totalPrice} đ</p>
                  </div>
                </div>
                <div className="w-full "></div>
              </div>
            );
          })}
          {/* <div className="flex flex-wrap gap-4 w-full">
            <div className="w-full flex gap-8 flex-wrap">
              <p>1</p>
              <p>HH0000001</p>
              <p>03-03-2023</p>
              <p>Lê Công Minh</p>
              <p>!57 Bùi Tá Hán, Khuê Mỹ, Ngũ Hành Sơn, Đà Nẳng</p>
            </div>

            <div className="flex w-full gap-4 flex-col flex-wrap">
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-col gap-4 w-full"
                  >
                    <div className="flex gap-4 pl-20 w-full flex-wrap">
                      <div className="">
                        <img
                          src="https://product.hstatic.net/1000075078/product/cloudfee-hanh-nhan-nuong_ba00ec49e2c141ce957f0015cc52ffe7_large.png"
                          alt=""
                          className="max-h-16"
                        />
                      </div>

                      <div className="flex w-5/6 justify-between">
                        <div className="flex flex-col ">
                          <Link>
                            <p className="w-full hover:text-orange-1">
                              CloudFee Hạnh Nhân Nướng
                            </p>
                          </Link>
                          <p className="w-full text-gray-1 text-sm">
                            Size: Vừa
                          </p>
                          <p className="w-full text-gray-1 text-sm">
                            Thạch Cà Phê x 1
                          </p>
                          <p className="w-full text-gray-1 text-sm">
                            Shot Espresso x 2
                          </p>
                          <p className="w-full text-gray-1 text-sm">
                            Sốt Caramel x 1
                          </p>
                        </div>
                        <div className="flex flex-col ">
                          <p className="w-full  text-primary-500"> 30.000đ</p>
                          <p className="w-full text-primary-500  text-sm">
                            4.000đ
                          </p>
                          <p className="w-full  text-primary-500 text-sm">
                            10.000đ
                          </p>
                          <p className="w-full  text-primary-500 text-sm">
                            10.000đ
                          </p>
                          <p className="w-full  text-primary-500 text-sm">
                            10.000đ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 pl-20 w-full flex-wrap">
                      <div className="">
                        <img
                          src="https://product.hstatic.net/1000075078/product/cloudfee-hanh-nhan-nuong_ba00ec49e2c141ce957f0015cc52ffe7_large.png"
                          alt=""
                          className="max-h-16"
                        />
                      </div>

                      <div className="flex w-5/6 justify-between">
                        <div className="flex flex-col ">
                          <Link>
                            <p className="w-full hover:text-orange-1">
                              CloudFee Hạnh Nhân Nướng
                            </p>
                          </Link>
                          <p className="w-full text-gray-1 text-sm">
                            Size: Vừa
                          </p>
                          <p className="w-full text-gray-1 text-sm">
                            Thạch Cà Phê x 1
                          </p>
                          <p className="w-full text-gray-1 text-sm">
                            Shot Espresso x 2
                          </p>
                          <p className="w-full text-gray-1 text-sm">
                            Sốt Caramel x 1
                          </p>
                        </div>
                        <div className="flex flex-col ">
                          <p className="w-full  text-primary-500"> 30.000đ</p>
                          <p className="w-full text-primary-500  text-sm">
                            4.000đ
                          </p>
                          <p className="w-full  text-primary-500 text-sm">
                            10.000đ
                          </p>
                          <p className="w-full  text-primary-500 text-sm">
                            10.000đ
                          </p>
                          <p className="w-full  text-primary-500 text-sm">
                            10.000đ
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 pl-20 w-full flex-wrap">
                      <div className="">
                        <img
                          src="https://product.hstatic.net/1000075078/product/cloudfee-hanh-nhan-nuong_ba00ec49e2c141ce957f0015cc52ffe7_large.png"
                          alt=""
                          className="max-h-16"
                        />
                      </div>

                      <div className="flex w-5/6 justify-between">
                        <div className="flex flex-col ">
                          <Link>
                            <p className="w-full hover:text-orange-1">
                              CloudFee Hạnh Nhân Nướng
                            </p>
                          </Link>
                          <p className="w-full text-gray-1 text-sm">
                            Size: Vừa
                          </p>
                          <p className="w-full text-gray-1 text-sm">
                            Thạch Cà Phê x 1
                          </p>
                          <p className="w-full text-gray-1 text-sm">
                            Shot Espresso x 2
                          </p>
                          <p className="w-full text-gray-1 text-sm">
                            Sốt Caramel x 1
                          </p>
                        </div>
                        <div className="flex flex-col ">
                          <p className="w-full  text-primary-500"> 30.000đ</p>
                          <p className="w-full text-primary-500  text-sm">
                            4.000đ
                          </p>
                          <p className="w-full  text-primary-500 text-sm">
                            10.000đ
                          </p>
                          <p className="w-full  text-primary-500 text-sm">
                            10.000đ
                          </p>
                          <p className="w-full  text-primary-500 text-sm">
                            10.000đ
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div>
                <a
                  className="- text-blue-500 text-sm"
                  onClick={(e) => openOrderDetail(e)}
                  href=""
                >
                  Xem Chi tiết
                </a>
              </div>
              <div className="flex gap-2 text-primary-500 items-end justify-end">
                <p>Tổng tiền: </p>
                <p className="text-2xl">192.000 đ</p>
              </div>
            </div>
            <div className="w-full "></div>
          </div> */}
        </div>
      </div>
    </UserProfile>
  );
}

export default UserHistory;
