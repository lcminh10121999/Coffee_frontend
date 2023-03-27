import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

Login.propTypes = {};

function Login(props) {
  const [isSign, setIsSign] = useState(true);
  const showAnimation = {
    hidden: {
      width: 0,
      height: 0,
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
    show: {
      opacity: 1,
      height: "fit-content",
      width: "100%",
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        <div className="flex   bg-image__login  justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"></div>
        <motion.div className="flex  justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <motion.div
            animate={{ height: isSign ? "415px" : "622px" }}
            className="bg-gradient-to-r from-orange-1 rounded-5 to-orange-2 lg:w-1/3 xs:w-full p-10 flex gap-6 flex-col
        "
          >
            <div className="flex justify-center">
              <div className="w-fit px-2 pb-2 ">
                <Link to={`/`}>
                  <img
                    src="https://order.thecoffeehouse.com/_nuxt/img/logo.174bdfd.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <AnimatePresence>
              {isSign && (
                <>
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex gap-4 justify-center w-full "
                  >
                    <div className="flex flex-col items-center pb-1 px-2   border-b text-white border-white">
                      <h3 className="mb-1 text-lg font-medium">Sign In</h3>
                      <div className="w-full border-b border-white"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="w-full flex gap-6  flex-wrap justify-center"
                  >
                    <div className="w-full relative shadow-lg">
                      <input
                        type="text"
                        placeholder="Nhập Email"
                        className="w-full border bg-white rounded-5  px-2 py-2"
                      />
                      <span className="text-sm absolute top-11 left-2 text-red-700">
                        nhập email
                      </span>
                    </div>
                    <div className="w-full relative shadow-lg">
                      <input
                        type="text"
                        placeholder="Nhập Password"
                        className="w-full  border bg-white rounded-5  px-2 py-2"
                      />
                      <span className="text-sm absolute top-11 left-2 text-red-700">
                        nhập email
                      </span>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex justify-between gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-white border-0 accent-white "
                      />
                      <label htmlFor="" className="text-white text-sm  ">
                        Remember Me
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <label
                        htmlFor=""
                        onClick={() => setIsSign(false)}
                        className="text-white text-sm cursor-pointer"
                      >
                        Sign Up now ?
                      </label>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="w-full"
                  >
                    {/* <button className="px-4 py-2 shadow-lg bg-white text-primary-500 w-full rounded-5 hover:bg-gradient-to-r from-orange-2 to-orange-1 hover:text-white font-medium">
                      Sign In
                    </button> */}
                    {/* <button className="rounded w-full px-3 py-2 m-1 border-b-4 border-l-2 text-white shadow-lg bg-primary-500 border-red-500 hover:bg-red-500 hover:border-primary-500 font-medium">
                      Sign In
                    </button> */}
                    <button className="rounded w-full px-3 py-2 m-1 border-b-4 border-l-2 text-white shadow-lg bg-teal-400 border-teal-600 hover:bg-teal-600 hover:border-teal-400 font-medium">
                      Sign In
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {!isSign && (
                <>
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex gap-4 justify-center w-full "
                  >
                    <div className="flex flex-col items-center pb-1 px-2   border-b text-white border-white">
                      <h3 className="mb-1 text-lg font-medium">Sign Up</h3>
                      <div className="w-full border-b border-white"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="w-full flex gap-6 flex-wrap justify-center"
                  >
                    <div className="w-full relative shadow-lg">
                      <input
                        type="text"
                        placeholder="Nhập Email"
                        className="w-full border bg-white rounded-5  px-2 py-2 "
                      />
                      <span className="text-sm absolute top-11 left-2 text-red-700">
                        nhập email
                      </span>
                    </div>
                    <div className="w-full relative shadow-lg">
                      <input
                        type="text"
                        placeholder="Nhập Name"
                        className="w-full border bg-white rounded-5  px-2 py-2"
                      />
                      <span className="text-sm absolute top-11 left-2 text-red-700">
                        nhập email
                      </span>
                    </div>
                    <div className="w-full relative shadow-lg">
                      <input
                        type="text"
                        placeholder="Nhập Password"
                        className="w-full border bg-white rounded-5  px-2 py-2"
                      />
                      <span className="text-sm absolute top-11 left-2 text-red-700">
                        nhập email
                      </span>
                    </div>
                    <div className="w-full relative shadow-lg">
                      <input
                        type="text"
                        placeholder="Nhập lại Password"
                        className="w-full border bg-white rounded-5  px-2 py-2"
                      />
                      <span className="text-sm absolute top-11 left-2 text-red-700">
                        nhập email
                      </span>
                    </div>
                    <div className="w-full relative shadow-lg">
                      <input
                        type="date"
                        placeholder="Nhập Date"
                        className="w-full border bg-white rounded-5  px-2 py-2"
                      />
                      <span className="text-sm absolute top-11 left-2 text-red-700">
                        nhập email
                      </span>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex justify-end gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <label
                        htmlFor=""
                        onClick={() => setIsSign(true)}
                        className="text-white text-sm cursor-pointer"
                      >
                        Sign in now ?
                      </label>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="w-full"
                  >
                    <button className="rounded w-full px-3 py-2 m-1 border-b-4 border-l-2 text-white shadow-lg bg-teal-400 border-teal-600 hover:bg-teal-600 hover:border-teal-400 font-medium">
                      Sign In
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Login;
