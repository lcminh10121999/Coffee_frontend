import React from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
SideBar.propTypes = {};

function SideBar(props) {
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
        {props.openSideBar && (
          <>
            <motion.div
              variants={showAnimation_2}
              initial="hidden"
              animate="show"
              exit="hidden"
              onClick={() => props.setOpenSideBar(false)}
              className="flex  bg-gray-300 opacity-70 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            ></motion.div>
            <motion.div
              variants={showAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-black w-10/12 lg:hidden xs:flex flex-col fixed  bg-orange-2 h-full top-0 left-0 z-20"
              >
                <div className="w-full relative  h-fit border-b-2 border-white">
                  <Link
                    onClick={() => props.setOpenSideBar(false)}
                    className="flex justify-center items-center"
                    to="/"
                  >
                    <img
                      src="https://order.thecoffeehouse.com/_nuxt/img/logo.174bdfd.svg"
                      alt="logo"
                      className="lg:w-full xs:w-2/3 h-16 object-contain"
                    />
                  </Link>
                  <div
                    className="- absolute z-50 top-5 right-2 text-white hover:text-orange-2 cursor-pointer"
                    onClick={() => props.setOpenSideBar(false)}
                  >
                    <AiOutlineClose className="w-5 h-5" />
                  </div>
                </div>
                <div className="w-full px-4 flex flex-col h-fit">
                  <NavLink
                    to={`/product`}
                    onClick={() => props.setOpenSideBar(false)}
                    className="text-xl font-semibold text-white hover:text-orange-1 border-b py-4 px-2 border-white"
                  >
                    Menu
                  </NavLink>
                  <div className="text-xl font-semibold text-white hover:text-orange-1 border-b py-4 px-2 border-white">
                    Lớp học
                  </div>
                  <NavLink
                    to={`/news`}
                    className="text-xl font-semibold text-white hover:text-orange-1 border-b py-4 px-2 border-white"
                  >
                    Tin Tức
                  </NavLink>
                  <div className="text-xl font-semibold text-white hover:text-orange-1 border-b py-4 px-2 border-white">
                    Giới thiệu
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default SideBar;
