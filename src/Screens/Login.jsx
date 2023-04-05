import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { handleUserLogin } from "../services/userServices.js";
import { useDispatch, useSelector } from "react-redux";
import { loginSlide } from "../actionSlide/loginSlide.js";
import { PulseLoader } from "react-spinners";

Login.propTypes = {};

function Login(props) {
  const [isSign, setIsSign] = useState(true);
  const userLoginInfo = useSelector((state) => state.userLogin.userInfo);
  const loadingLogin = useSelector((state) => state.userLogin.loadingLogin);
  const [rememberMe, setRememberMe] = useState(false);
  const loggedLocalStore = localStorage.getItem("logged");
  const loggedSessionStore = sessionStorage.getItem("logged");
  const loggedLoginSlide = useSelector((state) => state.userLogin.logged);

  console.log("userLoginInfo", userLoginInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const [errorLogin, setErrorLogin] = useState({
    errorMessage: "",
  });
  const [errorLoginEmailEmail, setErrorLoginEmail] = useState({
    errorMessage: "",
  });

  const [errorLoginPassword, setErrorLoginPassword] = useState({
    errorMessage: "",
  });

  const handleChangeInputLogin = (e) => {
    setErrorLogin({
      errorMessage: "",
    });
    setErrorLoginEmail({
      errorMessage: "",
    });
    setErrorLoginPassword({
      errorMessage: "",
    });
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    setErrorLogin({
      errorMessage: "",
    });
    setErrorLoginEmail({
      errorMessage: "",
    });
    setErrorLoginPassword({
      errorMessage: "",
    });
    dispatch(loginSlide.actions.setLoadingLogin("loading"));
    console.log(dataLogin);
    try {
      let data = await handleUserLogin(dataLogin.email, dataLogin.password);
      console.log(data);
      if ((data && data.errCode === 1) || data.errCode === 2) {
        setErrorLoginEmail({
          errorMessage: data.errMessage,
        });
        dispatch(loginSlide.actions.setLoadingLogin("reject"));
      } else if (data && data.errCode === 3) {
        setErrorLoginPassword({
          errorMessage: data.errMessage,
        });
        dispatch(loginSlide.actions.setLoadingLogin("reject"));
      } else if (data && data.errCode === 0) {
        console.log("success");
        dispatch(loginSlide.actions.setLoadingLogin("success"));
        dispatch(loginSlide.actions.setUserLogin(data.user));
        dispatch(loginSlide.actions.setLogged(true));
        sessionStorage.setItem("userLogin", JSON.stringify(data.user));
        sessionStorage.setItem("logged", true);
        if (rememberMe) {
          localStorage.setItem("userLogin", JSON.stringify(data.user));
          localStorage.setItem("logged", true);
        }
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          dispatch(loginSlide.actions.setLoadingLogin("reject"));
          setErrorLogin({
            errorMessage: error.response.data.errMessage,
          });
        }
      }
    }
  };
  useEffect(() => {
    if (JSON.parse(loggedLocalStore) === true) {
      let dataUser = localStorage.getItem("userLogin");
      dispatch(loginSlide.actions.setLoadingLogin("success"));
      dispatch(loginSlide.actions.setUserLogin(dataUser));
      console.log("1", loadingLogin);
    } else if (JSON.parse(loggedSessionStore) === true) {
      let dataUser = sessionStorage.getItem("userLogin");
      console.log("sessionStorage", dataUser);
      dispatch(loginSlide.actions.setLoadingLogin("success"));
      dispatch(loginSlide.actions.setUserLogin(dataUser));
    } else if (loggedLoginSlide === true) {
      dispatch(loginSlide.actions.setLoadingLogin("success"));
      console.log("2", loadingLogin);
    }
  }, [loggedLocalStore, loggedSessionStore, loggedLoginSlide]);

  useEffect(() => {
    if (loadingLogin === "success") {
      dispatch(loginSlide.actions.setLoadingLogin("idle"));
      navigate("/", { replace: true });
      console.log("3", loadingLogin);
    }
  }, [loadingLogin]);

  const [showPassword, setShowPassword] = useState(true);
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
                        type="email"
                        placeholder="Nhập Email"
                        name="email"
                        value={dataLogin.email}
                        onChange={(e) => handleChangeInputLogin(e)}
                        className="w-full border bg-white rounded-5  px-2 py-2"
                      />
                      <span className="text-sm absolute top-11 left-2 text-red-700">
                        {errorLogin.errorMessage}
                        {errorLoginEmailEmail.errorMessage}
                      </span>
                    </div>
                    <div className="w-full relative shadow-lg">
                      <input
                        type={showPassword ? "password" : " text"}
                        name="password"
                        value={dataLogin.password}
                        onChange={(e) => handleChangeInputLogin(e)}
                        placeholder="Nhập Password"
                        className="w-full  border bg-white rounded-5  px-2 py-2 relative"
                      />
                      {showPassword && (
                        <span className=" top-0 right-2 absolute h-full flex items-center cursor-pointer ">
                          <AiFillEyeInvisible
                            onClick={() => setShowPassword(false)}
                            className="w-5 h-5 text-gray-400"
                          />
                        </span>
                      )}
                      {!showPassword && (
                        <span className=" top-0 right-2 absolute h-full flex items-center cursor-pointer ">
                          <AiFillEye
                            onClick={() => setShowPassword(true)}
                            className="w-5 h-5 text-gray-400"
                          />
                        </span>
                      )}

                      <span className="text-sm absolute top-11 left-2 text-red-700">
                        {errorLogin.errorMessage}
                        {errorLoginPassword.errorMessage}
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
                        id="remember"
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 text-white border-0 accent-white "
                      />
                      <label
                        htmlFor="remember"
                        className="text-white text-sm  "
                      >
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
                    className="w-full relative"
                  >
                    {/* <button className="px-4 py-2 shadow-lg bg-white text-primary-500 w-full rounded-5 hover:bg-gradient-to-r from-orange-2 to-orange-1 hover:text-white font-medium">
                      Sign In
                    </button> */}
                    {/* <button className="rounded w-full px-3 py-2 m-1 border-b-4 border-l-2 text-white shadow-lg bg-primary-500 border-red-500 hover:bg-red-500 hover:border-primary-500 font-medium">
                      Sign In
                    </button> */}
                    {loadingLogin !== "loading" && (
                      <>
                        <button
                          onClick={(e) => handleLogin(e)}
                          className="rounded w-full px-3 py-2 m-1 border-b-4 border-l-2 text-white shadow-lg bg-teal-400 border-teal-600 hover:bg-teal-600 hover:border-teal-400 font-medium "
                        >
                          Sign In
                        </button>
                      </>
                    )}
                    {loadingLogin === "loading" && (
                      <>
                        <button
                          onClick={(e) => handleLogin(e)}
                          disabled
                          className="rounded w-full px-3 py-2 m-1 border-b-4 border-l-2 text-white shadow-lg bg-teal-600 border-teal-400 font-medium "
                        >
                          Loading
                        </button>
                        <div className="h-full w-fit absolute left-28 top-0 flex items-center pb-1">
                          <PulseLoader
                            size={"10"}
                            color="#ffff"
                            speedMultiplier={"0.5"}
                          />
                        </div>
                      </>
                    )}
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
