import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
UserSideBart.propTypes = {};

function UserSideBart(props) {
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.7,
      },
    },
    show: {
      opacity: 1,
      width: "80%",
      transition: {
        duration: 0.7,
      },
    },
  };
  const showAnimation_2 = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.7,
      },
    },
    show: {
      opacity: 0.7,
      width: "100%",
      transition: {
        duration: 0.7,
      },
    },
  };
  return (
    <>
      <AnimatePresence>
        {props.openUserSideBar && (
          <>
            <motion.div
              variants={showAnimation_2}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex  bg-gray-300 opacity-70 justify-center items-center overflow-x-hidden overflow-y-auto right-0 top-0 bottom-0 fixed  z-50 outline-none focus:outline-none"
            ></motion.div>
            <motion.div
              onClick={() => props.setOpenUserSideBar(false)}
              variants={showAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 right-0 z-50 outline-none focus:outline-none"
            >
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-black w-10/12 lg:hidden xs:flex flex-col fixed  bg-orange-2 h-full top-0 right-0 z-20"
              >
                {props.logged ? (
                  <>
                    <motion.div className="w-full relative  h-fit border-b-2 border-white">
                      <div className="w-full flex gap-2 p-4">
                        <div href="" className="image__default">
                          {props.userLoginData.image ? (
                            <img
                              src={props.userLoginData.image}
                              alt="default-user-image"
                              className="image__default max-h-16 rounded-full "
                            />
                          ) : (
                            <img
                              src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                              alt="default-user-image"
                              className="image__default max-h-16 rounded-full "
                            />
                          )}
                        </div>
                        <div className="flex items-center">
                          <p className="text-lg font-medium text-white">
                            {props.userLoginData.name}
                          </p>
                        </div>
                      </div>
                      <div
                        onClick={() => props.setOpenUserSideBar(false)}
                        className="- absolute z-50 top-5 right-2 text-white hover:text-orange-2 cursor-pointer"
                      >
                        <AiOutlineClose className="w-5 h-5" />
                      </div>
                    </motion.div>
                    <motion.div className="w-full px-4 flex flex-col h-fit">
                      <Link
                        to={`/user-info/profile`}
                        onClick={() => props.setOpenUserSideBar(false)}
                        className="text-xl font-semibold text-white hover:text-orange-1 border-b py-4 px-2 border-white"
                      >
                        Thông tin tài khoản
                      </Link>
                      <Link
                        to={`/user-info/user-address`}
                        onClick={() => props.setOpenUserSideBar(false)}
                        className="text-xl font-semibold text-white hover:text-orange-1 border-b py-4 px-2 border-white"
                      >
                        Sổ địa chỉ
                      </Link>
                      <Link
                        to={`/user-info/history`}
                        onClick={() => props.setOpenUserSideBar(false)}
                        className="text-xl font-semibold text-white hover:text-orange-1 border-b py-4 px-2 border-white"
                      >
                        Lịch sử giao dịch
                      </Link>
                    </motion.div>
                  </>
                ) : (
                  <motion.div className="w-full relative  h-fit border-b-2 border-white">
                    <div className="w-full flex gap-2 p-4">
                      <div href="" className="image__default">
                        <img
                          src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                          alt="default-user-image"
                          className="image__default max-h-16 rounded-full "
                        />
                      </div>
                      <div className="flex items-center">
                        <Link
                          to={`/login`}
                          className="text-lg font-medium text-white hover:text-orange-1"
                        >
                          Đăng Ký/ Đăng Nhập
                        </Link>
                      </div>
                    </div>
                    <div
                      onClick={() => props.setOpenUserSideBar(false)}
                      className="- absolute z-50 top-5 right-2 text-white hover:text-orange-2 cursor-pointer"
                    >
                      <AiOutlineClose className="w-5 h-5" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default UserSideBart;
