import React, { useState } from "react";
import PropTypes from "prop-types";
import Logo from "../../src/assets/Logo.png";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { FiYoutube } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
Footer.propTypes = {};
const showAnimation = {
  hidden: {
    width: "100%",
    height: 0,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  show: {
    opacity: 1,
    height: "fit-content",
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};
const showAnimation_2 = {
  hidden: {
    width: "100%",
    height: 0,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  show: {
    opacity: 1,
    height: "30px",
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};
function Footer(props) {
  const [openFooterHome, setOpenFooterHome] = useState(false);
  const [openFooterTerms, setOpenFooterTerms] = useState(false);
  const [openFooterHotline, setOpenFooterHotline] = useState(false);
  const [openFooterAddress, setOpenFooterAddress] = useState(false);
  const handleOpenDetailFooter = (
    e,
    openHome,
    openTerms,
    openHotline,
    openAddress
  ) => {
    e.preventDefault();
    if (openHome) {
      if (openFooterHome) {
        setOpenFooterHome(false);
      } else {
        setOpenFooterHome(true);
      }
    }
    if (openTerms) {
      if (openFooterTerms) {
        setOpenFooterTerms(false);
      } else {
        setOpenFooterTerms(true);
      }
    }
    if (openHotline) {
      if (openFooterHotline) {
        setOpenFooterHotline(false);
      } else {
        setOpenFooterHotline(true);
      }
    }
    if (openAddress) {
      if (openFooterAddress) {
        setOpenFooterAddress(false);
      } else {
        setOpenFooterAddress(true);
      }
    }
  };
  return (
    <motion.div className="bg-gray-20 text-main">
      <motion.div className="flex flex-wrap">
        <motion.div
          animate={{
            height:
              openFooterHome ||
              openFooterTerms ||
              openFooterHotline ||
              openFooterAddress
                ? "fit-content"
                : "fit-content",
            transition: {
              duration: 1,
            },
          }}
          className="w-full bg-black"
        >
          <div className="w-full flex lg:container lg:m-auto lg:py-16 lg:gap-28 xs:p-10 xs:gap-10">
            <img
              src="https://order.thecoffeehouse.com/_nuxt/img/logo-footer.72c86fc.png"
              alt="footer-image"
              className="h-min"
            />
            <div className="w-full flex lg:flex-row xs:flex-col lg:gap-10 xs:gap-4 text-white justify-center items-start">
              <div className="lg:w-1/4 xs:w-full border-b  border-smoky-gray pb-3">
                <a
                  href=""
                  onClick={(e) =>
                    handleOpenDetailFooter(e, true, false, false, false)
                  }
                >
                  <p className="font-semibold">
                    {!openFooterHome && <span className="mr-2 w-2 h-2">+</span>}
                    {openFooterHome && <span className="mr-2">-</span>}
                    Thông tin website
                  </p>
                </a>
                <AnimatePresence>
                  {openFooterHome && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="flex w-full flex-col gap-2 pl-10 font-light text-sm"
                    >
                      <motion.div className="flex w-full">
                        <p className="w-full">Trang chủ</p>
                      </motion.div>
                      <motion.div className="flex w-full">
                        <p className="w-full">Trang chủ</p>
                      </motion.div>
                      <motion.div className="flex w-full">
                        <p className="w-full">Trang chủ</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="lg:w-1/4 xs:w-full border-b border-smoky-gray pb-3">
                <a
                  href=""
                  onClick={(e) =>
                    handleOpenDetailFooter(e, false, true, false, false)
                  }
                >
                  <p className="font-semibold">
                    {!openFooterTerms && (
                      <span className="mr-2 w-2 h-2">+</span>
                    )}
                    {openFooterTerms && <span className="mr-2">-</span>}
                    Điêu khoản sử dụng
                  </p>
                </a>
                <AnimatePresence>
                  {openFooterTerms && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="flex w-full flex-col gap-2 pl-10 font-light text-sm"
                    >
                      <motion.div className="flex w-full">
                        <p className="w-full">Trang chủ</p>
                      </motion.div>
                      <motion.div className="flex w-full">
                        <p className="w-full">Trang chủ</p>
                      </motion.div>
                      <motion.div className="flex w-full">
                        <p className="w-full">Trang chủ</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="lg:w-1/4 xs:w-full border-b border-smoky-gray pb-3">
                <a
                  href=""
                  onClick={(e) =>
                    handleOpenDetailFooter(e, false, false, true, false)
                  }
                >
                  <p className="font-semibold">
                    {!openFooterHotline && (
                      <span className="mr-2 w-2 h-2">+</span>
                    )}
                    {openFooterHotline && <span className="mr-2">-</span>}
                    Hotline
                  </p>
                </a>
                <AnimatePresence>
                  {openFooterHotline && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="flex w-full flex-col gap-2 pl-10 font-light text-sm"
                    >
                      <motion.div className="flex w-full">
                        <p className="w-full">Trang chủ</p>
                      </motion.div>
                      <motion.div className="flex w-full">
                        <p className="w-full">Trang chủ</p>
                      </motion.div>
                      <motion.div className="flex w-full">
                        <p className="w-full">Trang chủ</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="lg:w-1/4 xs:w-full border-b border-smoky-gray pb-3">
                <a
                  href=""
                  onClick={(e) =>
                    handleOpenDetailFooter(e, false, false, false, true)
                  }
                >
                  <p className="font-semibold">
                    {!openFooterAddress && (
                      <span className="mr-2 w-2 h-2">+</span>
                    )}
                    {openFooterAddress && <span className="mr-2">-</span>}
                    Địa chỉ
                  </p>
                </a>
                <AnimatePresence>
                  {openFooterAddress && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="flex w-full flex-col gap-2 pl-10 font-light text-sm"
                    >
                      <motion.div className="flex w-full">
                        <p className="w-full">Trang chủ</p>
                      </motion.div>
                      <motion.div className="flex w-full">
                        <p className="w-full">Trang chủ</p>
                      </motion.div>
                      <motion.div className="flex w-full">
                        <p className="w-full">Trang chủ</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="w-full bg-black text-white">
          <div className="w-full container m-auto lg:py-16 xs:p-10 flex lg:flex-row xs:flex-col">
            <div className="lg:w-3/4 xs:w-full font-light text-xs xs:mb-4">
              <ul>
                <li className="pb-2">
                  Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN
                </li>
                <li className="pb-2">
                  Mã số DN: 0312867172 do sở kế hoạch và đầu tư tp. HCM cấp ngày
                  23/07/2014
                </li>
                <li className="pb-2">
                  Người đại diện:
                  <span className="font-semibold"> NGÔ NGUYÊN KHA</span>
                </li>
                <li className="pb-2">
                  Địa chỉ: 86-88 Cao Thắng, phường 04, quận 3, tp Hồ Chí Minh
                  Điện thoại: (028) 7107 8079 Email: hi@thecoffeehouse.vn
                </li>
                <li>
                  &copy; 2014-2022 Công ty cổ phần thương mại dịch vụ Trà Cà Phê
                  VN mọi quyền bảo lưu
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 xs:w-full flex xs:justify-center lg:justify-end items-center">
              <img
                src="https://order.thecoffeehouse.com/_nuxt/img/active.4cba64f.png"
                alt="bo-cong-thuong"
                className="h-min"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Footer;
