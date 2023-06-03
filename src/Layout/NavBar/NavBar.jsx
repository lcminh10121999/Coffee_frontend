import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { FaSearch } from "react-icons/fa";
import { CgUser } from "react-icons/cg";
import { BsCart2, BsTranslate } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { HiUserCircle, HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineHistory,
} from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import { useState } from "react";
import ModalStore from "../../components/ModalStore";
import { useDispatch, useSelector } from "react-redux";
import { ROUTER_URL } from "../../data/ruotersUrl";
import { loginSlide } from "../../actionSlide/loginSlide";
import { easeInOut } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cartSlide, getAllCartDetail } from "../../actionSlide/cartSlide";
import { useTranslation } from "react-i18next";
import i18n, { imgLocate, locate } from "../../i18n/i18n";
import { IMAGE_STORE } from "../../data/bannerIgame";
import { orderSlide } from "../../actionSlide/orderSLide";
import {
  handleSearchProduct,
  productSlide,
} from "../../actionSlide/productSlide";
import { removeVietnameseTones } from "../../Handle/removeVietnameseTones";
import { changeWhiteSpaceToDash } from "../../Handle/changeWhiteSpaceToDash";
import { PulseLoader } from "react-spinners";

NavBar.propTypes = {};

//! fix chon cửa hàng lưu vào localstorage

function NavBar(props) {
  const [openUserProfile, setOpenUserProfile] = useState(false);
  const [openTranslation, setOpenTranslation] = useState(false);
  const navigate = useNavigate();
  // const loadingOrder = useSelector((state) => state.order.loading);

  const currentLanguage = i18n.language;
  const { t } = useTranslation("nav");
  const handleOpenUserProfile = (e) => {
    e.preventDefault();
    setOpenUserProfile(true);
  };
  const handleCloseUserProfile = (e) => {
    e.preventDefault();
    setOpenUserProfile(false);
  };
  const [showModalStore, setShowModalStore] = useState(false);

  const userLogin = useSelector((state) => state.userLogin.userInfo);
  const searchResult = useSelector((state) => state.product.searchProduct.data);
  const searchLoading = useSelector(
    (state) => state.product.searchProduct.loading
  );
  const pageSearchLoading = useSelector(
    (state) => state.product.searchProduct.loadingPageSearch
  );
  const searchErrorCode = useSelector(
    (state) => state.product.searchProduct.errorCode
  );
  // const cartIdUserLogin = useSelector(
  //   (state) => state.userLogin.userInfo.cartUser.id
  // );
  const cartUser = useSelector((state) => state.cart.cartListItem.data);
  const [userLoginData, setUserLoginData] = useState(userLogin);

  const logged = useSelector((state) => state.userLogin.logged);
  const ref = useRef();
  const url = ROUTER_URL;
  const dispatch = useDispatch();

  // const userLoginInfo = useSelector((state) => state.userLogin.userInfo);
  // console.log(userLoginInfo);

  const defaultData = [
    {
      id: "all",
      name: "Chọn Cửa Hàng",
      address: "Chọn Cửa Hàng",
    },
  ];

  const storeList = useSelector((state) => state.store.storeList.data);
  const storeCheck = useSelector((state) => state.store.storeCheck);

  const [searchKey, setSearchKey] = useState({
    search: "",
  });

  useEffect(() => {
    if (logged && userLogin) {
      dispatch(getAllCartDetail(userLogin.cartUser?.id));
    }
  }, [logged, userLogin]);
  useEffect(() => {
    if (userLogin) {
      setUserLoginData(userLogin);
    }
  }, [userLogin]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        Object.keys(searchKey.search).length !== 0 &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        dispatch(productSlide.actions.setSearchProductEmpty([]));
        setSearchKey({ search: "" });
      }
      // if (openTranslation && ref.current && !ref.current.contains(e.target)) {
      //   setOpenTranslation(false);
      // }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [searchKey.search]);

  const toastError = () =>
    toast.success("Đăng xuất thành công!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userLogin");
    localStorage.setItem("logged", false);
    sessionStorage.removeItem("userLogin");
    sessionStorage.setItem("logged", false);
    dispatch(loginSlide.actions.setLogged(false));
    dispatch(loginSlide.actions.setUserLogout());
    dispatch(loginSlide.actions.setUserInfoLogout());
    dispatch(cartSlide.actions.setCartLogOut());
    toastError();
    setOpenUserProfile(false);
  };

  const changeLng = (lng) => {
    i18n.changeLanguage(lng);
    setOpenTranslation(false);
  };

  // useEffect(() => {
  //   if (loadingOrder === "success") {
  //     toast.success("Đặc hàng thành công!", {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     });
  //     dispatch(orderSlide.actions.setLoading("idle"));
  //   }
  // }, [loadingOrder]);

  const handleChangeSearchInput = (e) => {
    e.preventDefault();
    dispatch(productSlide.actions.setSearchProductLoading(true));
    setSearchKey({
      ...searchKey,
      [e.target.name]: e.target.value,
    });
  };
  console.log(searchKey);

  useEffect(() => {
    if (Object.keys(searchKey.search).length !== 0) {
      const search = setTimeout(() => {
        let limit = 5;
        dispatch(
          handleSearchProduct({
            key: searchKey.search,
            limit: limit,
          })
        );
        console.log("call api");
      }, 500);
      return () => clearTimeout(search);
    } else {
      dispatch(productSlide.actions.setSearchProductEmpty([]));
    }
  }, [searchKey.search]);

  const handleSearchEnter = () => {
    dispatch(
      handleSearchProduct({
        key: searchKey.search,
        limit: null,
      })
    );
    dispatch(productSlide.actions.setPageSearchLoading("success"));
  };

  useEffect(() => {
    let key = searchKey.search;
    if (pageSearchLoading === "success" && key !== "") {
      console.log("key", key);
      dispatch(productSlide.actions.setSearchProductEmpty([]));
      dispatch(productSlide.actions.setPageResultSearch(searchResult));
      navigate("/search", { replace: true, state: { keySearch: key } });
      setSearchKey({
        search: "",
      });
    }
  }, [pageSearchLoading]);
  const NavUserLoginInfo = () => {
    return (
      <>
        {!logged && (
          <div
            ref={ref}
            className="- top-10 right-8 shadow-md rounded-md w-60 absolute flex p-4 justify-center items-center flex-col text-black gap-2 bg-white"
          >
            <Link
              onClick={(e) => handleCloseUserProfile(e)}
              className="flex w-full justify-end hover:text-orange-2"
            >
              <AiOutlineClose />
            </Link>
            <Link
              to={url.login}
              className="flex w-full gap-4 justify-start items-center  hover:text-orange-2"
            >
              <AiOutlineUser />
              <p>{t("register-login")}</p>
            </Link>
          </div>
        )}
        {logged && (
          <div className="- top-10 right-8 shadow-md rounded-md w-60 absolute flex p-4 justify-center items-center flex-col text-black gap-2 bg-white">
            <div className="flex w-full justify-between">
              {userLoginData && (
                <p className="- font-medium text-lg gap-4 items-center text-primary-500 flex">
                  <AiOutlineUser />
                  {userLoginData.name}
                </p>
              )}

              <Link
                onClick={(e) => handleCloseUserProfile(e)}
                className="hover:text-orange-2"
              >
                <AiOutlineClose />
              </Link>
            </div>

            <Link
              to={`/user-info/profile`}
              className="flex w-full gap-4 justify-start items-center  hover:text-orange-2"
            >
              <RiProfileLine />
              <p>{t("user-profile")}</p>
            </Link>
            <Link
              to={`/user-info/user-address`}
              className="flex w-full gap-4 justify-start items-center hover:text-orange-2"
            >
              <HiOutlineLocationMarker />
              <p>{t("address-book")}</p>
            </Link>
            <Link
              to={`/user-info/history`}
              className="flex w-full gap-4 justify-start items-center hover:text-orange-2"
            >
              <AiOutlineHistory />
              <p>{t("transaction-history")}</p>
            </Link>
            <Link
              onClick={(e) => handleLogout(e)}
              className="flex w-full gap-4 justify-start items-center hover:text-orange-2"
            >
              <BiLogOut />
              <p>{t("log-uot")}</p>
            </Link>
          </div>
        )}
      </>
    );
  };
  return (
    <>
      <ToastContainer />
      {showModalStore && (
        <ModalStore
          setShowModalStore={setShowModalStore}
          // storeSelected={storeSelected}
          storeList={storeList}
          // setStoreSelect={setStoreSelect}
          // setStoreSelected={setStoreSelected}
        />
      )}
      <div className="bg-gradient-to-r from-orange-1 to-orange-2 shadow-md sticky top-0 z-20">
        {/* xs:flex xs:justify-center */}
        <div className="md:container md:mx-auto w-full py-4 px-2 lg:grid lg:gap-4 xs:gap-2 lg:grid-cols-12 xs:grid xs:grid-cols-5 xs:justify-between lg:justify-between items-center xs:relative">
          <div className="lg:col-span-3 lg:block xs:hidden xs:col-span-5 ">
            <Link className="flex justify-center items-center" to="/">
              <img
                src="https://order.thecoffeehouse.com/_nuxt/img/logo.174bdfd.svg"
                alt="logo"
                className="lg:w-full xs:w-2/3 h-16 object-contain"
              />
            </Link>
          </div>
          {/* absolute top-5 right-3 flex gap-2 */}
          {/* <div className="col-span-1 lg:hidden xs:flex justify-end gap-3">
            <NavLink className="text-secondary-400  hover:text-star active:text-star">
              <FaSearch className="h-9 w-9" />
            </NavLink>
            <NavLink className="text-secondary-400  hover:text-star active:text-star relative">
              <BsCart2 className=" h-9 w-9" />
              <div className="w-5 h5 flex-colo rounded-full text-sm bg-subMain text-white absolute -top-1 -right-1">
                2
              </div>
            </NavLink>
          </div> */}
          <div
            className="xl:col-span-2 xs:col-span-3 bg-orange-3 h-14 flex justify-center items-center rounded-full p-2 gap-2 cursor-pointer	"
            onClick={() => setShowModalStore(true)}
          >
            <img
              src={IMAGE_STORE.image}
              className="h-11 w-11 rounded-full"
              alt=""
            />

            <div className="w-full ">
              {/* {storeSelected.map((item) => {
                return (
                  <>
                    <p className="text-xs font-semibold">{item.name}</p>
                    <p className="text-xs">
                      Tại: <span>{item.address}</span>
                    </p>
                  </>
                );
              })} */}
              <p className="text-xs font-semibold"> {t("choose-store")}</p>
              <p className="text-xs">
                {t("place")}:{" "}
                <span>
                  {" "}
                  {storeCheck
                    ? storeCheck.id === "all"
                      ? t("choose-store")
                      : storeCheck.name
                    : t("choose-store")}
                </span>
              </p>
            </div>
            <div>
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
          {/* <div className=" col-span-1 lg:block xs:hidden"></div> */}
          <div className="lg:col-span-3 xs:hidden lg:flex h-full justify-center  items-center relative">
            <input
              type="text"
              className="w-full text-black h-1/2 shadow-lg rounded-md px-8 text-xs relative"
              name="search"
              value={searchKey.search}
              onChange={(e) => handleChangeSearchInput(e)}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  handleSearchEnter();
                }
              }}
              placeholder={t("search")}
            />
            <FaSearch className="h-4 w-4 text-orange-1 absolute left-3" />
            {Object.keys(searchKey.search).length !== 0 && (
              <div
                ref={ref}
                id="searchHome"
                className=" absolute min-h-8 py-1 w-full gap-2 bg-white border border-slate-300 shadow-lg rounded-md px-2 top-12 right-0"
              >
                <div className="flex flex-col w-full gap-2">
                  {searchLoading ? (
                    <div className="flex gap-2 p-1 items-center justify-center rounded-5 cursor-pointer text-gray-400">
                      <PulseLoader size={10} color="#9CA3AF" />
                    </div>
                  ) : searchErrorCode === 0 ? (
                    searchResult?.map((item) => {
                      let myProductName = removeVietnameseTones(item.name);
                      let slug = changeWhiteSpaceToDash(myProductName);
                      return (
                        <div className="flex gap-2 p-1 rounded-5 cursor-pointer hover:bg-gray-300">
                          <Link
                            to={{
                              pathname: "/product/" + slug,
                            }}
                            state={{
                              id: item.id,
                              category_id: item.category_id,
                            }}
                            relative="path"
                            className="flex gap-2"
                          >
                            <img
                              src={item.image}
                              className="h-10 w-10 rounded-5"
                              alt=""
                            />
                            <div className="flex flex-col gap-1">
                              <p className=" text-xs text-black">{item.name}</p>
                              <p className=" text-xs text-primary-500">
                                {item.price?.toLocaleString()}₫
                              </p>
                            </div>
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <div className="flex gap-2 p-1 rounded-5  text-xs justify-center items-center  text-gray-400">
                      {t("no-results-found")}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          {/* <div className=" col-span-1 lg:block xs:hidden"></div> */}
          <div className="col-span-2 font-medium hidden text-sm xl:gap-4 2xl:gap-4 xl:flex justify-between items-center">
            <NavLink
              to={`/product`}
              className="text-white text-left hover:border-b h-full hover:border-white"
            >
              {t("menu")}
            </NavLink>
            {/* <NavLink className="text-white hover:border-b h-full hover:border-white">
              {t("our-class")}
            </NavLink> */}
            <NavLink
              to={`/news`}
              className="text-white text-left hover:border-b h-full hover:border-white"
            >
              {t("new")}
            </NavLink>
            <NavLink className="text-white text-left hover:border-b h-full hover:border-white">
              {t("about-us")}
            </NavLink>
          </div>

          <div
            ref={ref}
            onClick={(e) =>
              openTranslation
                ? setOpenTranslation(false)
                : setOpenTranslation(true)
            }
            className="col-span-1  cursor-pointe flex cursor-pointer justify-center items-center justify-self-start nav-translate relative"
          >
            <img
              src={imgLocate[currentLanguage]}
              alt="VN-Flag"
              className="rounded-full max-h-5 mr-1 "
            />

            <span className="text-xs">{locate[currentLanguage]}</span>
          </div>
          {openTranslation && (
            <div className="sub-nav-translate h-fit flex gap-2 flex-col lg:top-14 lg:right-24 xs:top-32 xs:right-16">
              <button
                onClick={(e) => changeLng("vi")}
                className="text-center p-1 items-center  cursor-pointer flex gap-2 w-full hover:bg-gray-50 "
              >
                <img
                  src="https://viblo.asia/images/vi-flag-32x48.png"
                  alt="VN-Flag"
                  className="rounded-full max-h-5 mr-1 "
                />
                <p className="w-full text-xs  ">{t("language-vi")}</p>
              </button>
              <button
                onClick={(e) => changeLng("en")}
                className="text-center items-center p-1 cursor-pointer  flex gap-2 w-full hover:bg-gray-50 "
              >
                <img
                  src="  https://viblo.asia/images/en-flag-32x48.png"
                  alt="VN-Flag"
                  className="rounded-full max-h-5 "
                />

                <p className=" w-full text-xs ">{t("language-en")}</p>
              </button>
              <button
                onClick={(e) => changeLng("jp")}
                className="text-center items-center p-1 cursor-pointer flex gap-2 w-full hover:bg-gray-50 "
              >
                <img
                  src=" https://img.freepik.com/premium-vector/japan-black-map-flag-vector-concept_572070-388.jpg?w=2000"
                  alt="VN-Flag"
                  className="rounded-full max-h-5 "
                />

                <p className=" w-full text-xs ">{t("language-jp")}</p>
              </button>
            </div>
          )}

          <div className="col-span-1 relative">
            <div className="lg:justify-between xs:justify-center items-center flex lg:gap-4 xs:gap-2 ">
              {/* <NavLink
                onClick={(e) =>
                  openUserProfile
                    ? setOpenUserProfile(false)
                    : setOpenUserProfile(true)
                }
                className=" text-white xs:hidden lg:block hover:text-secondary-400 h-full relative"
              >
                <HiUserCircle className="lg:w-10 lg:h-10 xs:w-8 h-8" />
              </NavLink> */}
              <NavLink
                onClick={(e) => setOpenUserProfile(!openUserProfile)}
                className=" text-white xs:hidden lg:block hover:text-secondary-400 h-full relative"
              >
                <HiUserCircle className="lg:w-10 lg:h-10 xs:w-8 h-8" />
              </NavLink>
              {openUserProfile && <NavUserLoginInfo />}

              <NavLink className=" text-white xs:block lg:hidden hover:text-secondary-400 h-full ">
                <AiOutlineSearch className="lg:w-10 lg:h-10 xs:w-8 h-8 font-light" />
              </NavLink>
              <NavLink
                to={`/cart`}
                className=" text-white hover:text-secondary-400 relative"
              >
                <BsCart2 className="lg:w-8 lg:h-8 xs:w-6 xs:h-6" />
                {Object.keys(cartUser).length !== 0 && (
                  <div className="w-5 h5 flex-colo rounded-full  text-sm bg-subMain text-white absolute -top-1 -right-2">
                    {Object.keys(cartUser).length}
                  </div>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
