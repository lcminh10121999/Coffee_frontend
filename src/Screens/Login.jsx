import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  handleUserLogin,
  handleUserRegister,
} from "../services/userServices.js";
import { useDispatch, useSelector } from "react-redux";
import { loginSlide } from "../actionSlide/loginSlide.js";
import { PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

Login.propTypes = {};

function Login(props) {
  const [isSign, setIsSign] = useState(true);
  const { t } = useTranslation("login");
  const userLoginInfo = useSelector((state) => state.userLogin.userInfo);
  const loadingLogin = useSelector((state) => state.userLogin.loadingLogin);
  const loadingRegister = useSelector(
    (state) => state.userLogin.loadingRegister
  );
  const [rememberMe, setRememberMe] = useState(false);
  const [showPasswordRegister, setShowPasswordRegister] = useState(true);
  const loggedLocalStore = localStorage.getItem("logged");
  const loggedSessionStore = sessionStorage.getItem("logged");
  const loggedLoginSlide = useSelector((state) => state.userLogin.logged);
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
  const [dataRegister, setDataRegister] = useState({
    email: "",
    password: "",
    name: "",
    birthday: "",
    phone: "",
  });

  const [errorRegister, setErrorRegister] = useState({
    errEmail: "",
    errPassword: "",
    errBirthday: "",
    errName: "",
    errPhone: "",
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

  const handleChangeInputRegister = (e) => {
    setErrorRegister({
      errEmail: "",
      errPassword: "",
      errBirthday: "",
      errName: "",
      errPhone: "",
    });
    setDataRegister({ ...dataRegister, [e.target.name]: e.target.value });
  };

  console.log(dataRegister);

  const toastError = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

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
    if (!dataLogin.email && !dataLogin.password) {
      toastError("Đăng nhập thát bại!");
      setErrorLoginPassword({
        errorMessage: "Password không được trống",
      });
      setErrorLoginEmail({
        errorMessage: "Email không được trống",
      });
    } else if (!dataLogin.email) {
      setErrorLoginEmail({
        errorMessage: "Email không được trống",
      });
      toastError("Đăng nhập thát bại!");
    } else if (dataLogin.email && !regEmail.test(dataLogin.email)) {
      toastError("Đăng nhập thát bại!");
      setErrorLoginEmail({
        errorMessage: "Nhập đúng định dạng mail",
      });
    } else if (!dataLogin.password) {
      toastError("Đăng nhập thát bại!");
      setErrorLoginPassword({
        errorMessage: "Password không được trống",
      });
    } else if (
      dataLogin.email &&
      regEmail.test(dataLogin.email) &&
      dataLogin.password
    ) {
      dispatch(loginSlide.actions.setLoadingLogin("loading"));
      console.log(dataLogin);
      try {
        let data = await handleUserLogin(dataLogin.email, dataLogin.password);

        if ((data && data.errCode === 1) || data.errCode === 2) {
          toastError();
          setErrorLoginEmail({
            errorMessage: data.errMessage,
          });
          dispatch(loginSlide.actions.setLoadingLogin("reject"));
        } else if (data && data.errCode === 3) {
          toastError();
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
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorRegister({
      errEmail: "",
      errPassword: "",
      errBirthday: "",
      errName: "",
      errPhone: "",
    });
    if (
      !dataRegister.email &&
      !dataRegister.name &&
      !dataRegister.password &&
      !dataRegister.phone &&
      !dataRegister.birthday
    ) {
      setErrorRegister({
        errEmail: "Email không được trống",
        errPassword: "Password không được trống",
        errBirthday: "Ngày sinh không được trống",
        errName: "Tên không được trống",
        errPhone: "Số điện thoại không được trống",
      });
    } else if (!dataRegister.email) {
      setErrorRegister({
        errEmail: "Email không được trống",
      });
      toastError("Đăng Ký thát bại!");
    } else if (dataRegister.email && !regEmail.test(dataRegister.email)) {
      toastError("Đăng Ký thát bại!");
      setErrorRegister({
        errEmail: "Nhập đúng định dạng mail",
      });
    } else if (!dataRegister.password) {
      toastError("Đăng Ký thát bại!");
      setErrorRegister({
        errPassword: "Password không được trống",
      });
    } else if (!dataRegister.name) {
      toastError("Đăng Ký thát bại!");
      setErrorRegister({
        errName: "Tên không được trống",
      });
    } else if (!dataRegister.phone) {
      toastError("Đăng Ký thát bại!");
      setErrorRegister({
        errPhone: "Số điện thoại không được trống",
      });
    } else if (isNaN(+dataRegister.phone)) {
      toastError("Đăng Ký thát bại!");
      setErrorRegister({
        errPhone: "Nhập đúng định dạng Số điện thoại",
      });
    } else if (
      !isNaN(+dataRegister.phone) &&
      (dataRegister.phone.length < 10 || dataRegister.phone.length > 11)
    ) {
      toastError("Đăng Ký thát bại!");
      setErrorRegister({
        errPhone: "Số điện thoại không đưuọc ngắn hơn 10 và dai hơn 11 ký tự",
      });
    } else if (!dataRegister.birthday) {
      toastError("Đăng Ký thát bại!");
      setErrorRegister({
        errBirthday: "Ngày sinh không được trống",
      });
    } else if (
      dataRegister.birthday &&
      dataRegister.phone &&
      dataRegister.name &&
      dataRegister.password &&
      dataRegister.email &&
      regEmail.test(dataRegister.email)
    ) {
      dispatch(loginSlide.actions.setLoadingRegister("loading"));

      try {
        let dataRes = await handleUserRegister(dataRegister);
        if (dataRes && dataRes.errorCode === 1) {
          toastError("Đăng Ký thát bại!");
          setErrorRegister({
            errEmail: "Email đã tồn tại",
          });
          dispatch(loginSlide.actions.setLoadingRegister("reject"));
        } else if (dataRes && dataRes.errorCode === 0) {
          toast.success("Đăng Ký thành công!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          dispatch(loginSlide.actions.setLoadingRegister("success"));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (JSON.parse(loggedLocalStore) === true) {
      let dataUser = localStorage.getItem("userLogin");

      // let data = await handleUserLogin(dataLogin.email, dataLogin.password);
      // dispatch(loginSlide.actions.setUserLogin(data.user));
      // dispatch(loginSlide.actions.setLogged(true));
      const data = JSON.parse(dataUser);
      dispatch(loginSlide.actions.setLoadingLogin("success"));
      dispatch(loginSlide.actions.setUserLogin(data));
    } else if (JSON.parse(loggedSessionStore) === true) {
      let dataUser = sessionStorage.getItem("userLogin");

      const data = JSON.parse(dataUser);
      dispatch(loginSlide.actions.setLoadingLogin("success"));
      dispatch(loginSlide.actions.setUserLogin(data));
    } else if (loggedLoginSlide === true) {
      dispatch(loginSlide.actions.setLoadingLogin("success"));
    }
  }, [loggedLocalStore, loggedSessionStore, loggedLoginSlide]);

  useEffect(() => {
    if (loadingLogin === "success") {
      toast.success("Đăng nhập thành công!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      dispatch(loginSlide.actions.setLoadingLogin("idle"));
      navigate("/", { replace: true });
    }

    if (loadingRegister === "success") {
      dispatch(loginSlide.actions.setLoadingRegister("idle"));
      setDataRegister({
        email: "",
        password: "",
        name: "",
        birthday: "",
        phone: "",
      });
      setIsSign(true);
    }
  }, [loadingLogin, loadingRegister]);

  const [showPassword, setShowPassword] = useState(true);

  return (
    <>
      <ToastContainer />
      <AnimatePresence>
        <div className="flex   bg-image__login  justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"></div>
        <motion.div className="flex  justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <motion.div
            animate={{ height: isSign ? "421px" : "622px" }}
            className="bg-gradient-to-r from-orange-1 rounded-5 to-orange-2 lg:w-1/3 xs:w-full mx-6 p-10 flex gap-6 flex-col
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
                      <h3 className="mb-1 text-lg font-medium">{t("login")}</h3>
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
                        placeholder={t("email")}
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
                        placeholder={t("password")}
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
                        {t("remember-me")}
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <label
                        htmlFor=""
                        onClick={() => setIsSign(false)}
                        className="text-white text-sm cursor-pointer"
                      >
                        {t("register-now")}
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
                          {t("login")}
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
                          {t("loading")}
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
                  <motion.form
                    action=""
                    method="post"
                    animate={{ height: isSign ? "415px" : "490px" }}
                    className="flex flex-col gap-6"
                  >
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="flex gap-4 justify-center w-full "
                    >
                      <div className="flex flex-col items-center pb-1 px-2   border-b text-white border-white">
                        <h3 className="mb-1 text-lg font-medium">
                          {" "}
                          {t("register")}
                        </h3>
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
                          name="email"
                          onChange={handleChangeInputRegister}
                          value={dataRegister.email}
                          placeholder={t("email")}
                          className="w-full border bg-white rounded-5  px-2 py-2 "
                        />
                        {errorRegister.errEmail && (
                          <span className="text-sm absolute top-11 left-2 text-red-700">
                            {errorRegister.errEmail}
                          </span>
                        )}
                      </div>
                      <div className="w-full relative shadow-lg">
                        <input
                          type="text"
                          placeholder={t("full-name")}
                          onChange={handleChangeInputRegister}
                          value={dataRegister.name}
                          name="name"
                          className="w-full border bg-white rounded-5  px-2 py-2"
                        />
                        {errorRegister.errName && (
                          <span className="text-sm absolute top-11 left-2 text-red-700">
                            {errorRegister.errName}
                          </span>
                        )}
                      </div>
                      <div className="w-full relative shadow-lg">
                        <input
                          type={showPasswordRegister ? "password" : " text"}
                          name="password"
                          value={dataRegister.password.trim()}
                          onChange={handleChangeInputRegister}
                          placeholder={t("password")}
                          className="w-full border bg-white rounded-5  px-2 py-2"
                        />
                        {errorRegister.errPassword && (
                          <span className="text-sm absolute top-11 left-2 text-red-700">
                            {errorRegister.errPassword}
                          </span>
                        )}
                        {showPasswordRegister && (
                          <span className=" top-0 right-2 absolute h-full flex items-center cursor-pointer ">
                            <AiFillEyeInvisible
                              onClick={() => setShowPasswordRegister(false)}
                              className="w-5 h-5 text-gray-400"
                            />
                          </span>
                        )}
                        {!showPasswordRegister && (
                          <span className=" top-0 right-2 absolute h-full flex items-center cursor-pointer ">
                            <AiFillEye
                              onClick={() => setShowPasswordRegister(true)}
                              className="w-5 h-5 text-gray-400"
                            />
                          </span>
                        )}
                      </div>

                      <div className="w-full relative shadow-lg">
                        <input
                          type="text"
                          name="phone"
                          value={dataRegister.phone.trim()}
                          onChange={handleChangeInputRegister}
                          placeholder={t("phone")}
                          className="w-full border bg-white rounded-5  px-2 py-2"
                        />
                        {errorRegister.errPhone && (
                          <span className="text-sm absolute top-11 left-2 text-red-700">
                            {errorRegister.errPhone}
                          </span>
                        )}
                      </div>
                      <div className="w-full relative shadow-lg">
                        <input
                          type="date"
                          name="birthday"
                          value={dataRegister.birthday}
                          onChange={handleChangeInputRegister}
                          placeholder="Nhập Date"
                          className="w-full border bg-white rounded-5  px-2 py-2"
                        />
                        {errorRegister.errBirthday && (
                          <span className="text-sm absolute top-11 left-2 text-red-700">
                            {errorRegister.errBirthday}
                          </span>
                        )}
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
                          {t("login-now")}
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
                      {loadingRegister !== "loading" && (
                        <>
                          <button
                            onClick={handleRegister}
                            className="rounded w-full px-3 py-2 m-1 border-b-4 border-l-2 text-white shadow-lg bg-teal-400 border-teal-600 hover:bg-teal-600 hover:border-teal-400 font-medium"
                          >
                            {t("register")}
                          </button>
                        </>
                      )}
                      {loadingRegister === "loading" && (
                        <>
                          <button
                            disabled
                            className="rounded w-full px-3 py-2 m-1 border-b-4 border-l-2 text-white shadow-lg bg-teal-600 border-teal-400 font-medium "
                          >
                            {t("loading")}
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
                  </motion.form>
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
