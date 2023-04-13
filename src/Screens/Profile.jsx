import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineClose,
  AiOutlineHistory,
} from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";
import { Link, NavLink, useParams } from "react-router-dom";
import { HiUserCircle, HiOutlineLocationMarker } from "react-icons/hi";
import UserProfile from "./UserProfile";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { loginSlide, updateUserData } from "../actionSlide/loginSlide";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

Profile.propTypes = {};

function Profile(props) {
  const userLogin = useSelector((state) => state.userLogin.userLoginInfo);
  const loadingUpdateUser = useSelector(
    (state) => state.userLogin.loadingUpdateUser
  );
  const [userLoginInfo, setUserLoginInfo] = useState({
    id: userLogin.id,
    image: userLogin.image,
    email: userLogin.email,
    gender: userLogin.gender,
    name: userLogin.name,
    phone: userLogin.phone,
    address: userLogin.address,
    birthday: userLogin.birthday,
  });
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [errUserUpdate, setErrUserUpdate] = useState({
    name: "",
    phone: "",
    email: "",
    birthday: "",
  });

  const dispatch = useDispatch();

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

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    console.log("objectUrl", objectUrl);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    if (userLogin) {
      setUserLoginInfo({
        id: userLogin.id,
        image: userLogin.image,
        email: userLogin.email,
        gender: userLogin.gender,
        name: userLogin.name,
        phone: userLogin.phone,
        address: userLogin.address,
        birthday: userLogin.birthday,
      });
    }
  }, [userLogin]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const ImageUser = () => {
    return preview ? (
      <img src={preview} class="personal-avatar  w-60 h-60" alt="avatar" />
    ) : (
      <img
        src={userLoginInfo.image}
        class="personal-avatar  w-60 h-60"
        alt="avatar"
      />
    );
  };

  const ImageUser2 = () => {
    return preview ? (
      <img src={preview} class="personal-avatar  w-60 h-60" alt="avatar" />
    ) : (
      <img
        src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
        class="personal-avatar  w-60 h-60"
        alt="avatar"
      />
    );
  };

  const handleOnChangeInputUpdate = (e) => {
    setErrUserUpdate({
      name: "",
      phone: "",
      email: "",
      birthday: "",
    });
    setUserLoginInfo({ ...userLoginInfo, [e.target.name]: e.target.value });
  };

  const validateUserUpdate = (value) => {
    let isValid = false;
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!value.name) {
      setErrUserUpdate({ name: "Tên không được trống" });
      isValid = false;
    } else if (!value.email) {
      setErrUserUpdate({ email: "Email không được trống" });
      isValid = false;
    } else if (isNaN(+value.phone)) {
      setErrUserUpdate({ phone: "Nhập đúng định dạng Số điện thoại" });
      isValid = false;
    } else if (
      !isNaN(+value.phone) &&
      (value.phone.length < 10 || value.phone.length > 11)
    ) {
      setErrUserUpdate({
        phone: "Số điện thoại không đưuọc ngắn hơn 10 và dai hơn 11 ký tự",
      });
      isValid = false;
      console.log("value.phone", value.phone);
      console.log(value.phone.length);
    } else if (value.email && !regEmail.test(value.email)) {
      setErrUserUpdate({ email: "Nhập đúng định dạng mail" });
      isValid = false;
    } else if (!value.phone) {
      setErrUserUpdate({ phone: "Số điện thoại không được trống" });
    } else if (!value.birthday) {
      setErrUserUpdate({ birthday: "Ngày sinh không được trống" });
      isValid = false;
    } else {
      isValid = true;
    }

    return isValid;
  };

  const handleUpdateUser = () => {
    setErrUserUpdate({
      name: "",
      phone: "",
      email: "",
      birthday: "",
    });
    let data = {
      id: userLoginInfo.id,
      // image: userLogin.image,
      email: userLoginInfo.email,
      gender: userLoginInfo.gender,
      name: userLoginInfo.name,
      phone: userLoginInfo.phone,
      address: userLoginInfo.address,
      birthday: userLoginInfo.birthday,
    };

    let isValid = validateUserUpdate(data);

    if (isValid) {
      try {
        dispatch(updateUserData(data));
      } catch (error) {
        alert(error);
      }
    } else {
      toastError("Cập nhật thất bại");
    }
  };

  useEffect(() => {
    if (loadingUpdateUser === "success") {
      toast.success("Cập nhập thành công!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      dispatch(loginSlide.actions.setLoadingUpdateUser());
    }
  }, [loadingUpdateUser]);

  return (
    <UserProfile>
      <ToastContainer />
      <div className="w-full mb-8 flex justify-center items-center gap-2">
        <AiOutlineUser className="w-8 h-8  text-primary-500 " />
        <p className="text-2xl font-semibold text-primary-500">
          Thông tin tài khoản
        </p>
      </div>

      <div className="lg:w-2/4 xs:w-full">
        <div className="w-full flex flex-col justify-center  items-center gap-4 relative">
          <div class="personal-image">
            <label class="label">
              <input
                type="file"
                name="image"
                onChange={onSelectFile}
                className="upload-avatar"
              />
              <figure class="personal-figure w-60 h-60 ">
                {userLoginInfo.image ? <ImageUser /> : <ImageUser2 />}

                <figcaption class="personal-figcaption flex justify-center items-center">
                  <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" />
                </figcaption>
              </figure>
            </label>
          </div>

          <div className="lg:px-10 lg:mt-6 lg:m-0 xs:mb-4  relative">
            <img
              src="https://fibocard.com/image/245_1_P%20M.png"
              className="shadow-lg"
              alt=""
            />
            <p className="- absolute top-4 lg:left-16 xs:left-6 text-xl text-white font-semibold">
              {userLoginInfo.name}
            </p>
            <p className="- absolute top-12 lg:left-16 xs:left-6 text-base text-white font-normal">
              1000 Coins
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-2/4 xs:w-full gap-3 flex flex-col ">
        <div className="flex flex-col  gap-2 w-full relative">
          <p className="- text-lg font-medium text-orange-2  mt-2">
            Tên Khách Hàng
          </p>
          <div className="w-full flex flex-col gap-2 relative">
            <input
              type="text"
              name="name"
              className="w-full text-black shadow-md border  border-gray-300  rounded-5 py-2 px-2 text-sm"
              onChange={handleOnChangeInputUpdate}
              value={userLoginInfo.name}
              placeholder="Họ và Tên"
            />
          </div>
          {errUserUpdate.name && (
            <span className="text-xs absolute top-20 mt-2 text-red-700">
              {errUserUpdate.name}
            </span>
          )}
        </div>
        <div className="w-full flex flex-col gap-2 relative">
          <p className="- text-lg font-medium text-orange-2  mt-2">
            Số Điên Thoại
          </p>

          <div className="w-full flex flex-col gap-8">
            <input
              type="text"
              name="phone"
              className="w-full text-black shadow-md border  border-gray-300  rounded-5 py-2 px-2 text-sm"
              placeholder="NHập số điện thoại"
              onChange={handleOnChangeInputUpdate}
              value={`${userLoginInfo.phone && userLoginInfo.phone.trim()}`}
            />
          </div>
          {errUserUpdate.phone && (
            <span className="text-xs absolute top-20 mt-2 text-red-700">
              {errUserUpdate.phone}
            </span>
          )}
        </div>

        <div className="w-full flex flex-col gap-2 relative">
          <p className="- text-lg font-medium text-orange-2  mt-2">Email</p>
          <div className="w-full flex gap-8">
            <input
              type="text"
              className="w-full text-black shadow-md border bg-gray-300 border-gray-300  rounded-5 py-2 px-2 text-sm"
              placeholder="Email"
              value={userLoginInfo.email}
              disabled
            />
          </div>
          {errUserUpdate.email && (
            <span className="text-xs absolute top-20 mt-2 text-red-700">
              {errUserUpdate.email}
            </span>
          )}
        </div>

        <div className="w-full flex flex-col gap-2 relative">
          <p className="- text-lg font-medium text-orange-2  mt-2">Ngày Sinh</p>
          <div className="w-full flex gap-8">
            <input
              type="date"
              name="birthday"
              className="w-full text-black shadow-md border  border-gray-300  rounded-5 py-2 px-2 text-sm"
              placeholder="Birthday"
              onChange={handleOnChangeInputUpdate}
              value={moment(userLoginInfo.birthday).format("DD/MM/YYYY")}
            />
          </div>
          {errUserUpdate.birthday && (
            <span className="text-xs absolute top-20 mt-2 text-red-700">
              {errUserUpdate.birthday}
            </span>
          )}
        </div>

        <div className="w-full flex flex-col gap-2 relative">
          <p className="- text-lg font-medium text-orange-2  mt-2">Địa chỉ</p>
          <div className="w-full flex gap-8">
            <input
              type="text"
              name="address"
              className="w-full text-black shadow-md border  border-gray-300  rounded-5 py-2 px-2 text-sm"
              placeholder="Nhập địa chỉ"
              onChange={handleOnChangeInputUpdate}
              value={userLoginInfo.address}
            />
          </div>
        </div>

        <p className="- text-lg font-medium text-orange-2  mt-2">Giới tính</p>
        <div className="w-full flex gap-8">
          <div>
            <input
              type="radio"
              name="gender"
              id="gender-1"
              checked={userLoginInfo.gender == 1}
              onChange={handleOnChangeInputUpdate}
              value="1"
              className="mr-1"
            />
            <label
              htmlFor="gender-1"
              className={`font-medium  ${
                userLoginInfo.gender == 1 && "text-primary-500"
              }`}
            >
              Nam
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              checked={userLoginInfo.gender == 2}
              onChange={handleOnChangeInputUpdate}
              id="gender-2"
              value="2"
              className="mr-1"
            />
            <label
              htmlFor="gender-2"
              className={`font-medium  ${
                userLoginInfo.gender == 2 && "text-primary-500"
              }`}
            >
              Nữ
            </label>
          </div>
        </div>
        <div className="w-full flex gap-8 justify-center ">
          <button
            onClick={handleUpdateUser}
            disabled={loadingUpdateUser === "loading" ? true : false}
            className={`relative rounded px-3 flex w-28 h-12 justify-center items-center py-2 m-1 border-b-4 border-l-2 text-white shadow-lg 
            ${
              loadingUpdateUser === "loading"
                ? "bg-orange-3 border-orange-1 "
                : "bg-orange-1 border-orange-3 hover:bg-orange-3 hover:border-orange-1"
            }  font-medium`}
          >
            {loadingUpdateUser === "loading" ? (
              <ClipLoader
                color="#fff"
                cssOverride={{}}
                size={24}
                className=""
                speedMultiplier={0.5}
              />
            ) : (
              "Cập Nhật"
            )}
          </button>
        </div>
      </div>
    </UserProfile>
  );
}

export default Profile;
